

const getStoredWishList = ()=>{
const storedListStr = localStorage.getItem('wish-list')
if(storedListStr){
    const storedList = JSON.parse(storedListStr)
    return storedList
}else{
    return []
}
}


const AddToStoredWishList = (book)=>{
   
    const storedList = getStoredWishList()
    
    const isExist = storedList.find(item => item.bookId === book.bookId);
  
    
    if (isExist) {
      console.log('Book already exists in your wishlist');
      return;
    }
  
    
    storedList.push(book);
  
    
    localStorage.setItem('wish-list', JSON.stringify(storedList));
  }

export{AddToStoredWishList}