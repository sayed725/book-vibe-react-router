import { toast } from "react-toastify"

const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
       return toast.error('Book already added')
    }
    else {
        storedList.push(id)
    }
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('read-list' , storedListStr)
    toast.success('This Book is added to your ReadList')

}

export {addToStoredReadList , getStoredReadList}