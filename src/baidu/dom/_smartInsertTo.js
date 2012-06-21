/**
 * @author linlingyu
 */

///import baidu.type;
///import baidu.dom.clone;
///import baidu.dom.getDocument;
///import baidu.dom._buildElements;
///import baidu.dom._smartInsert;
///import baidu.dom.contains;

baidu.dom._smartInsertTo = baidu.dom._smartInsertTo || function(tang, target, callback, orie){
    baidu.type(target) === 'string'
        && target.charAt(0) === '<'
        && target.charAt(target.length - 1) === '>'
        && target.length > 2
        && (target = baidu.dom._buildElements([target], tang.getDocument() || document));
    var insert = baidu.dom(target),
        first = insert[0],
        len, tangDom;
        
    if(orie && first && (!first.parentNode || (first.nodeType !== 3
        && !baidu.dom.contains(document.documentElement, first)))){
            orie = orie === 'before';
            tangDom = baidu.merge(orie ? tang : insert, !orie ? tang : insert);
            if(tang !== tangDom){
                tang.length = 0;
                baidu.merge(tang, tangDom);
            }
    }else{
        len = insert.length;
        for(var i = 0; i < len; i++){
            baidu.dom._smartInsert(baidu.dom(insert[i]), i > 0 ? tang.clone(true) : tang, callback);
        }
    }
};
