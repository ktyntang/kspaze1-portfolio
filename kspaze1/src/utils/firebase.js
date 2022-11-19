const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, listAll} = require("firebase/storage")
const { getFirestore,collection, getDocs} = require("firebase/firestore") 

const firebaseConfig = {
  apiKey: "AIzaSyA8yG32JLP8Nln87qHtucY8caRPgT2BZxY", 
  authDomain: "kspaze1-gc.firebaseapp.com",
  databaseURL: "https://kspaze1-gc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kspaze1-gc",
  storageBucket: "kspaze1-gc.appspot.com",
  messagingSenderId: "90513859284",
  appId: "1:90513859284:web:92112d63a05809a50c9141",
  measurementId: "G-P8G4KD9T9Y"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app);


// returns docObj {index: 4, caption: 'Soytiet Portrait Art'}
// if no caption, returns {index: 4, caption: undefined} 
const getImgCaptions = async (folderFileName) =>{
  const collectionRef = collection(db, folderFileName);
  try {
    const docs = await getDocs(collectionRef);
    let docObjList = []
    docs.forEach((doc) => {
        const docObj = {}
        docObj.index = parseInt(doc.id.split(folderFileName)[1])
        docObj.caption = doc.data().caption
        docObjList.push(docObj)
      });
      const sortedDocList = docObjList.sort((a, b)=> a.index - b.index)
      const sortedCaptions = sortedDocList.map(arr => arr.caption)

      return sortedCaptions
  } catch (e) {
    console.error("Error fetching captions from database: ", e);
  }
console.log('Done fetching captions')
}
// ----------------------------------------------------------------


//filenameIndex => returns [index,url]
const getIndexURL=(url,folderFileName)=>{
  if (url.status === 'fulfilled') {
    const splitUrl = url.value.split(folderFileName)
    const index = splitUrl[splitUrl.length-1].split('.')[0]
    console.log({index})
    const indexedURL = [parseInt(index),url.value]
    return indexedURL
  }
  }

const getSortedUrls = async (folderFileName) => {
  const folderRef = ref(storage,folderFileName)
  try{
  const files = await listAll(folderRef)
  const urlPromises = files.items.map(async itemRef => {
    const url = await getDownloadURL(itemRef)
    return url
  })
  const urlList = await Promise.allSettled(urlPromises)
  const indexedList = urlList.map(url => getIndexURL(url,folderFileName))
  const sortedList = indexedList.sort((a, b)=> a[0] - b[0])
  const sortedURLs = sortedList.map(arr => arr[1])
  console.log(`Fetched ${sortedURLs.length} images out of ${urlList.length} images in ${folderFileName} folder`)
  return sortedURLs
} catch (e) {
  console.error("Error fetching image urls from cloud: ", e);
}
console.log('Done fetching img urls')
}

// ----------------------------------------------------------------

export {getSortedUrls, getImgCaptions}