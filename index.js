var header = new Vue({
    el:"#head",
    data:{
        message:"一个拥护党的先进集体",
        butt:"呵呵",
        flag:true
    },
    methods:{
        change:function(){
            if (this.flag === true)
            {this.message = "一个拥护党国的先进集体";
            this.butt = "保命要紧";}
            else
            {  this.message="一个拥护党的先进集体";
            this.butt= "呵呵";}
            this.flag = !this.flag;
        }
    }
})