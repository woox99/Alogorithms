// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

const func = isConnected => {

    class Union{
        constructor(size){
            this.root = [];
            this.depth = [];
            
            for(let i = 0; i < size; i++){
                this.root[i] = i;
                this.depth[i] = 0;
            }
        }

        find(x){
            return this.root[x];
        }

        union(x, y){
            const rootX = this.find(x);
            const rootY = this.find(y);

            if(rootX == rootY){
                return this;
            }

            if(this.depth[rootX] > this.depth[rootY]){
                for(let i = 0; i < this.root.length; i++){
                    if(this.root[i] == rootY){
                        this.root[i] = rootX;
                    }
                }
            }
            if(this.depth[rootX] < this.depth[rootY]){
                for(let i = 0; i < this.root.length; i++){
                    if(this.root[i] == rootX){
                        this.root[i] = rootY;
                    }
                }
            }
            if(this.depth[rootX] == this.depth[rootY]){
                for(let i = 0; i < this.root.length; i++){
                    if(this.root[i] == rootY){
                        this.root[i] = rootX;
                    }
                }
                this.depth[rootX]++;
            }
        }
    }


    let size = isConnected.length + isConnected[0].length;
    const disjointSet = new Union(size);
    
    for(let i = 0; i < isConnected.length; i++){
        let k = isConnected[0].length;
        for(let j = 0; j < isConnected[0].length; j++){
            if(isConnected[i][j] == 1){
                disjointSet.union(i, k);
            }
            k++;
        }
    }

    const hashSet = new Set();
    for(const root of disjointSet.root){
        hashSet.add(root);
    }

    console.log(hashSet.size)
    return hashSet.size;
}


func(isConnected = [[1,0,0],[0,1,0],[0,0,1]]);