var block = [
{"size": 57247, "fee": 0.0887, "weight": '' },
{"size": 98732, "fee": 0.1856, "weight": '' },
{"size": 134928, "fee": 0.2307, "weight": '' },
{"size": 77275, "fee": 0.1522, "weight": '' },
{"size": 29240, "fee": 0.0532, "weight": '' },
{"size": 15440, "fee": 0.0250, "weight": '' },
{"size": 70820, "fee": 0.1409, "weight": '' },
{"size": 139603, "fee": 0.2541, "weight": '' },
{"size": 63718, "fee": 0.1147, "weight": '' },
{"size": 143807, "fee": 0.2660, "weight": '' },
{"size": 190457, "fee": 0.2933, "weight": '' },
{"size": 40572, "fee": 0.0686, "weight": '' },

]


block.forEach(a => a.weight = a.size / a.fee)

block.sort((a, b) =>  a.weight - b.weight)

var max_limit = 500000
var profit = 0

for(var b of block) {
        if(b.size <  max_limit) {
        max_limit-=b.size
        profit+=b.fee
    }
}

profit + 12.5
