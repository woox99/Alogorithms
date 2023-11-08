class UnionFind{
    // O(N)
    constructor(size){
        this.parent = [];
        this.depth = [];

        // The parent of each groups is initially itself
        for(let i = 0; i < size; i++){
            this.parent[i] = i;
            this.depth[i] = 0;
        }
    }

    // Find the representative (root) of a group
    // O(logN)
    find(x){
        // The representative of a group has itself as a parent,
        if(this.parent[x] != x){
            return this.find(this.parent[x])
        }
        
        return this.parent[x];
    }

    displayRoot(x){
        if(this.parent[x] != x){
            return this.displayRoot(this.parent[x]);
        }
        console.log(this.parent[x]);
        return this.parent[x];
    }

    // Join two groups
    // O(logN)
    union(x,y){
        const rootX = this.find(x);
        const rootY = this.find(y);

        // If x and y are not already in a group
        if(rootX !== rootY){
            // If group X is smaller, add it to group Y
            if(this.depth[rootX] < this.depth[rootY]){
                this.parent[rootX] = rootY;
            }
            // If group Y is small, add it to group X
            else if(this.depth[rootY] < this.depth[rootX]){
                this.parent[rootY] = rootX;
            }
            // If they're the same size add group Y to X but increase X's depth
            else{
                this.parent[rootY] = rootX;
                this.depth[rootX]++;
            }
        }
    }

    // Check if two nodes are connect (same root node)
    // O(logN)
    connected(x, y){
        const rootX = this.find(x);
        const rootY = this.find(y);

        if( rootX === rootY){
            console.log(true);
            return true;
        }

        console.log(false);
        return false;
    }

}

const uf = new UnionFind(4);
// uf.displayRoot(0)
// uf.displayRoot(1)
// uf.displayRoot(2)

uf.union(0,1)
uf.union(2,3)
uf.union(0,2)

// console.log(uf.depth[0])
// console.log(uf.depth[2])

// uf.displayRoot(3)

// uf.connected(1,3);

console.log(uf.parent)