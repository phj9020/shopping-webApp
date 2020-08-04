
loadItems()
.then(items => {
    displayItems(items);
})  // 성공적으로 받아왔을 시 
.catch(console.log);