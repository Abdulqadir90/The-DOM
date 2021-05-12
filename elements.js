{/* <h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p> */}

  function byTagName(node, tagName) {
    let all = [];
    let tag = tagname.toUpperCase()

    if( node.length > 0) {
        for(let i = 0; i > node.length; i++) {
            if (node[i] = tag)
        }
    }
    all.push(node);
}

  return all;

  console.log(byTagName(document.body, "h1").length);
  console.log(byTagName(document.body, "span").length);

  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);

