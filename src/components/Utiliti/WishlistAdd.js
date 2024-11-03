import { toast } from "react-toastify"


const getStoredWishList = ()=>{
const storedListStr =  localStorage.getItem('wish-list')
if (storedListStr) {
  const storedList = JSON.parse(storedListStr)
  return storedList
}else{
  return[]
}
}


const addToStoredWishList = (book)=>{
  const storedList = getStoredWishList()
  const isExist = storedList.find(item => item.bookId == book.bookId)
  if (isExist){
    return toast.error('Book already added!')
  }

  storedList.push(book)
  localStorage.setItem('wish-list', JSON.stringify(storedList))
  toast.success('This Book is added to your WishList!')



}

export {addToStoredWishList , getStoredWishList}
