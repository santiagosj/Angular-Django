
var tree = []
var leaves = [];

function setup(){
    createCanvas(window.innerWidth, innerHeight)
    var b = new Branch(createVector(width / 2, height), createVector(0, -1), 100)
    tree.push(b)
}

function draw(){
    background(255)

    for(var i = 0; i < tree.length; i++){
        tree[i].update();
        tree[i].render();

        if(tree[i].timeToBranch()){
            if(tree.length < 1024){
                tree.push(tree[i].branch(30))
                tree.push(tree[i].branch(-25));
            }else{
                leaves.push(new Leaf(tree[i].end));
            }
        }
    }
    for (var i = 0; i < leaves.length; i++) {
        leaves[i].display();
        leaves[i].update();
      }
}