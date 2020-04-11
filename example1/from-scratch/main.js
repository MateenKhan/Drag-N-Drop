const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let dragged_item = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];
    item.addEventListener('dragstart', function(){
        dragged_item=item;
        setTimeout(function(){
            item.style.display = 'none';
        },0);
    });

    item.addEventListener('dragend', function(){
        setTimeout(function(){
            dragged_item.style.display = 'block';
            dragged_item = null;
        },0);
    });

    for(let j=0; j<lists.length;j++){
        const list = lists[j];
        list.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        list.addEventListener('dragenter', function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
        list.addEventListener('dragleave', function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
        list.addEventListener('drop', function(e){
            this.append(dragged_item);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
    }
}