class Tab {
    constructor(that) {
        this.box = that; 
        this.opts = {
            btns:['按钮一','按钮二','按钮三'],
            content:[
                '1111',
                '222',
                '3333'
            ]
        }
    }
    init(opts){
        $.extend(true,this.opts,opts)
        this.createBtn();
        this.createDiv();
        this.events();
    }
    createBtn(){
        this.opts.btns.forEach((item,i)=>{
            this.box.append($(`<button class="${i==0?'active':''}">${item}</button>`))
        });
    }
    createDiv(){
        this.opts.content.forEach((item,i)=>{
            this.box.append($(`<div class="${i==0?'show':''}">${item}</div>`))
        });
    }
    events(){
        this.btns = this.box.find('button');
        this.divs = this.box.find('div');

        let that = this;

        this.btns.click(function(){
            $(this).addClass('active').siblings('button').removeClass('active');
           
            that.divs.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show');
        });
    }

}

$.fn.extend({
    tabs:function(opts){
        let t = new Tab(this);
        t.init(opts);
        return this;
    }
});