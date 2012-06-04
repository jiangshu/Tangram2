/**
 * @author wangxiao
 */

///import baidu;
///import baidu.dom;
///import baidu.type;
///import baidu.each;

baidu.dom.extend({
    addClass: function(arg){
    	//异常处理
        if(arguments.length <= 0 || classNameString === null){return this;}
        document.createDocumentFragment().appendChild(div);
        for(var i = 0; i < args.length; i++){
            type = baidu.type(args[i]);
            switch(type){
                case 'string':
                    div.innerHTML = args[i];
                    baidu.each(div.childNodes, function(item){
                        fragment.appendChild(item);
                    });
                    break;

                case 'HTMLElement':
                    fragment.appendChild(args[i]);
                    break;

                case '$DOM':
                case 'array':
                    baidu.each(args[i], function(item){
                        fragment.appendChild(item);
                    });
                    break;
                    
                case 'function':
                    baidu.each(this, function(item, index){
                        baidu.dom(item).append(args[i].call(item, index, item.innerHTML));
                    });
                    break;
            }
        }

        baidu.each(this, function(item){
            item.appendChild(fragment.cloneNode(true));
        });

        return this;
    }
});