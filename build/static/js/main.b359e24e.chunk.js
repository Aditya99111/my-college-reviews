(this.webpackJsonpjupyter=this.webpackJsonpjupyter||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,i,a){},function(e,i,a){},function(e,i,a){},,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},,,,function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var t=a(1),s=a.n(t),u=a(11),o=a.n(u),r=(a(16),a(17),a(4)),n=(a(18),a(2)),c=a(0),m=function(){var e=Object(n.f)(),i=Object(t.useState)(""),a=Object(r.a)(i,2),s=a[0],u=a[1],o=function(i){i.preventDefault(),""===s?alert("Please enter a college"):e("/search/?searchTerm=".concat(s))};return Object(c.jsxs)("section",{className:"home",id:"home",children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:"Finding your dream school should be easy!"}),Object(c.jsx)("form",{action:"",children:Object(c.jsx)("input",{value:s,onInput:function(e){return u(e.target.value)},type:"text",placeholder:"Search a college...",className:"box search",onSubmit:o})}),Object(c.jsx)("button",{className:"btn",onClick:o,children:"Search!"})]}),Object(c.jsx)("div",{className:"cloud cloud-1"}),Object(c.jsx)("div",{className:"cloud cloud-2"})]})},l=(a(20),a.p+"static/media/about-img.d8c19460.png"),d=a(3),p=function(){return Object(c.jsxs)("section",{className:"about",id:"about",children:[Object(c.jsx)("h1",{className:"heading",children:" about us "}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:l,alt:"about"})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{className:"title",children:"Find the perfect school for you!"}),Object(c.jsxs)("p",{children:["Are you interested in finding your dream school? With My college reviews you can easily read reviews from college students. We want to help you with your college search! ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," My College Reviews makes it easy to browse reviews from any college. All you got to do is search a college and start reading reviews. Help grow our community by posting a review today!"]}),Object(c.jsx)(d.b,{to:"/search",className:"btn",children:"Search now"})]})]})]})},b=a(6),j=a(7),q=(a(21),function(){var e=Object(t.useState)({email:"",name:"",subject:"",message:""}),i=Object(r.a)(e,2),a=i[0],s=i[1],u=function(e){s(Object(j.a)(Object(j.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("section",{className:"contact",id:"contact",children:[Object(c.jsx)("h1",{className:"heading",children:"contact us "}),Object(c.jsxs)("div",{className:"icons-container",children:[Object(c.jsx)("a",{href:"https://instagram.com/mycollegereviews",children:Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("i",{class:"fab fa-instagram"}),Object(c.jsx)("h3",{children:"our instagram"}),Object(c.jsx)("p",{className:"lowercase",children:"@mycollegereviews"})]})}),Object(c.jsx)("a",{href:"https://www.tiktok.com/@mycollegereviews",children:Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("i",{class:"fab fa-tiktok"}),Object(c.jsx)("h3",{children:"our tiktok"}),Object(c.jsx)("p",{className:"lowercase",children:"@mycollegereviews"})]})}),Object(c.jsx)("a",{href:"#_",children:Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(c.jsx)("h3",{children:"our location"}),Object(c.jsx)("p",{children:"USA"})]})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Success! Your message has been submitted."),fetch("https://sheetdb.io/api/v1/gjj1jy21shoh4",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},method:"POST",id:"form",children:[Object(c.jsx)("h1",{class:"heading",style:{fontSize:"3rem"},children:"Feel free to send us a message below."}),Object(c.jsx)("input",{name:"name",type:"text",placeholder:"Name",className:"box",onChange:u,required:!0}),Object(c.jsx)("input",{name:"email",type:"email",placeholder:"Email",className:"box",onChange:u,required:!0}),Object(c.jsx)("input",{name:"subject",type:"text",placeholder:"Subject",className:"box",onChange:u,required:!0}),Object(c.jsx)("textarea",{name:"message",placeholder:"Message",className:"box",id:"",cols:"30",rows:"10",onChange:u,required:!0}),Object(c.jsx)("input",{type:"submit",value:"send message",className:"btn"})]})})]})}),h=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),Object(c.jsx)(p,{}),Object(c.jsx)(q,{})]})},x=(a(22),function(){var e=Object(n.e)(),i=Object(t.useState)(void 0),a=Object(r.a)(i,2),s=a[0],u=a[1],o=Object(t.useState)([]),m=Object(r.a)(o,2),l=m[0],d=m[1];return Object(t.useEffect)((function(){if(""!==e.search){var i=e.search.split("=")[1];u(i)}else u("");fetch("https://sheetdb.io/api/v1/370q0msdfd9bl").then((function(e){return e.json()})).then((function(e){console.log(e),d(e)}))}),[]),void 0===s?Object(c.jsx)("p",{children:"Loading..."}):Object(c.jsx)("section",{className:"searchpage",children:Object(c.jsxs)("div",{className:"maincontent",children:[Object(c.jsx)("div",{className:"searchbar",children:Object(c.jsx)("form",{action:"",children:Object(c.jsx)("input",{className:"box",type:"text",placeholder:"Search here",onChange:function(e){u(e.target.value)}})})}),Object(c.jsxs)("section",{class:"products",id:"products",children:[Object(c.jsxs)("h1",{class:"heading",children:[" ","latest ",Object(c.jsx)("span",{children:"reviews"})," "]}),Object(c.jsx)("div",{class:"box-container",children:l.filter((function(e){return""===s||e.Name_of_College.toLowerCase().includes(s.toLowerCase())?e:void 0})).map((function(e,i){return Object(c.jsxs)("div",{class:"box",children:[Object(c.jsxs)("div",{className:"stars",children:[Array.from("x".repeat(e.College_Rating)).map((function(e,i){return Object(c.jsx)("i",{class:"fas fa-star"},i)})),Array.from("x".repeat(e.Less_Stars)).map((function(e,i){return Object(c.jsx)("i",{class:"far fa-star"},i)}))]}),Object(c.jsxs)("div",{class:"content",children:[Object(c.jsx)("h3",{className:"left",children:e.College_Major}),Object(c.jsx)("h3",{className:"right",children:e.Name_of_College}),Object(c.jsxs)("p",{className:"date",children:[e.Start_Date," - ",e.Graduation_Date]}),Object(c.jsx)("p",{className:"college_description",children:e.College_Review})]})]},i)}))})]})]})})}),v=(a(23),function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("section",{className:"footer",children:[Object(c.jsxs)("div",{class:"share",children:[Object(c.jsx)(d.b,{to:"/privacy",class:"btn",children:" privacy policy "}),Object(c.jsx)(d.b,{to:"/terms",class:"btn lowercase",children:"  Terms of use "})]}),Object(c.jsxs)("div",{className:"credit",children:["\xa9 all rights reserved ",Object(c.jsx)("span",{children:"My college Reviews"})," @ 2022 "]})]})})}),f=(a(24),a(9)),g=function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)(d.b,{to:"/",className:"logo",children:[" ",Object(c.jsx)("i",{class:"fas fa-graduation-cap"})," My college reviews"]}),Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)(f.a,{to:"/#home",children:"home"}),Object(c.jsx)(f.a,{to:"/#about",children:"About"}),Object(c.jsx)(f.a,{to:"/#contact",children:"Contact"})]}),Object(c.jsx)(d.b,{to:"/rate",className:"try",children:"Rate a college"}),Object(c.jsx)("div",{id:"menu-btn",className:"fas fa-bars"})]})},O=(a(28),function(){var e=Object(t.useState)({email:"",name:"",subject:"",message:""}),i=Object(r.a)(e,2),a=i[0],s=i[1],u=function(e){s(Object(j.a)(Object(j.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(c.jsx)("div",{className:"ratepage",children:Object(c.jsxs)("section",{className:"contact",id:"contact",children:[Object(c.jsx)("h1",{className:"heading",children:" write a  review "}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Success! Your review has been submitted."),fetch("https://sheetdb.io/api/v1/370q0msdfd9bl",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},method:"POST",id:"form",children:[Object(c.jsx)("p",{className:"input_title",children:" college name"}),Object(c.jsx)("input",{type:"text",placeholder:"e.g. Harvard",name:"Name_of_College",className:"box",onChange:u,required:!0}),Object(c.jsx)("p",{className:"input_title",children:" start date"}),Object(c.jsx)("input",{type:"month",name:"Start_Date",className:"box",onChange:u,required:!0}),Object(c.jsx)("p",{className:"input_title",children:" graduation date"}),Object(c.jsx)("input",{type:"month",name:"Graduation_Date",className:"box",placeholde:"mm/yyyy",onChange:u,required:!0}),Object(c.jsx)("p",{className:"input_title",children:" college major"}),Object(c.jsx)("input",{type:"text",name:"College_Major",placeholder:"e.g. Computer science",className:"box",onChange:u,required:!0}),Object(c.jsx)("p",{className:"input_title",children:" Your Rating"}),Object(c.jsxs)("div",{className:"label",children:[Object(c.jsx)("p",{children:"1"}),Object(c.jsx)("p",{children:"2"}),Object(c.jsx)("p",{children:"3"}),Object(c.jsx)("p",{children:"4"}),Object(c.jsx)("p",{children:"5"})]}),Object(c.jsxs)("div",{className:"ratingsection",children:[Object(c.jsx)("input",{type:"radio",value:"1",name:"College_Rating",className:"box",onChange:u,required:!0}),Object(c.jsx)("input",{type:"radio",value:"2",name:"College_Rating",className:"box",onChange:u,required:!0}),Object(c.jsx)("input",{type:"radio",value:"3",name:"College_Rating",className:"box",onChange:u,required:!0}),Object(c.jsx)("input",{type:"radio",value:"4",name:"College_Rating",className:"box",onChange:u,required:!0}),Object(c.jsx)("input",{type:"radio",value:"5",name:"College_Rating",className:"box",onChange:u,required:!0})]}),Object(c.jsx)("p",{className:"input_title",children:" college review"}),Object(c.jsx)("textarea",{name:"College_Review",placeholder:"Write your review here...",className:"box",id:"",cols:"30",rows:"10",onChange:u,required:!0}),Object(c.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})})]})})}),N=(a(29),function(){return Object(c.jsxs)("div",{className:"privacypage",children:[Object(c.jsxs)("h1",{className:"heading",children:["privacy ",Object(c.jsx)("span",{children:"policy"})]}),Object(c.jsxs)("p",{children:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nobis libero vel ullam facere quaerat, recusandae magni omnis tenetur et, velit totam amet culpa molestiae sequi quisquam impedit hic perferendis rerum ad qui debitis. Reiciendis, non odio delectus quae commodi numquam ipsam est fugit beatae officia esse veritatis aspernatur nisi. Dolorum natus quibusdam vitae nisi ad doloremque ea, sequi explicabo saepe nesciunt dicta fugit porro corrupti laudantium voluptatibus. Perferendis reprehenderit officiis amet, impedit quaerat ratione distinctio beatae similique repudiandae omnis enim sunt suscipit laborum nisi eum nostrum officia eius error. Molestiae, magni facere eum libero ipsum expedita aut deserunt nesciunt dolorum? Autem recusandae veniam distinctio dicta itaque natus minus dolor placeat mollitia ullam. Modi error explicabo iusto excepturi illo sit maxime ipsum tempora, at expedita? Magni, distinctio. Corrupti molestiae assumenda doloribus magnam! Commodi quasi molestiae veniam eaque, fugiat ullam vero dolor beatae error sed ducimus, pariatur tempore provident autem nisi facilis ad, quod laboriosam dolorum aut dolore enim quam. Molestiae quasi at ab sit deleniti ex quod atque doloribus beatae obcaecati magnam aliquid cum, voluptatibus facilis, eligendi soluta inventore laboriosam commodi non esse! Dolorem omnis hic id similique odio eveniet, ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," accusantium provident iusto magni quis neque sapiente animi est eius eaque rem. Obcaecati, ex. Exercitationem fugiat dolore, possimus dolorum numquam animi voluptas beatae nemo ratione perferendis facere dicta suscipit error, ullam culpa ipsam expedita incidunt eius quibusdam blanditiis sunt at quasi distinctio? Voluptas ipsam ex, reiciendis a at beatae est molestias totam optio quod soluta non facilis, ab consectetur ratione nesciunt quibusdam quisquam harum maxime explicabo! Culpa repellat laboriosam consequuntur, iusto in fuga, quos nihil qui ex esse laborum recusandae distinctio impedit veritatis porro accusamus. Voluptatem facilis modi quasi nam rem, veniam similique distinctio laborum velit cumque voluptas vitae eveniet, earum eligendi sequi necessitatibus commodi blanditiis nulla laboriosam quos dignissimos debitis. ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," Dicta vitae perspiciatis harum dolore ipsam aliquam! Vitae quis impedit ab placeat repudiandae animi illo ea corporis et nihil eum incidunt iusto mollitia aut optio unde quam, nesciunt deserunt laborum voluptatum error nulla aliquid dignissimos hic? Qui quibusdam, quasi repudiandae eveniet culpa nesciunt optio eaque harum in porro iusto. Fuga qui, impedit et sint perspiciatis dolores saepe dicta explicabo, ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," eligendi libero rerum maiores, omnis corporis nesciunt voluptates repellat odit velit quis quam. Nam ullam tempora fugit sed ut eius fugiat nulla quis quibusdam impedit, reprehenderit maxime voluptatem ratione nisi voluptatibus accusamus omnis dolores ipsum corrupti saepe commodi. Eveniet alias possimus corporis facere. Aliquam, accusamus repudiandae architecto fugit voluptatibus iusto aut, quas possimus non nesciunt reiciendis enim id eum recusandae necessitatibus reprehenderit doloremque molestiae veritatis eaque aperiam vel, nihil quibusdam magnam? Numquam tempore id porro molestias placeat officia, fuga tempora quasi sed quam, dignissimos maiores delectus quod rem aliquam ea odio alias facere saepe! Voluptate voluptatum, ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," veniam quo fuga repudiandae at esse quos molestiae, repellendus nihil soluta ut natus ipsa sint eum qui animi placeat, error atque ipsum voluptatem cumque. Quidem doloribus doloremque provident? Quaerat alias asperiores quo accusantium ipsa ducimus modi ullam deserunt autem. Adipisci, veritatis autem eligendi culpa in eos eveniet dolorem nisi perspiciatis corrupti doloribus laborum neque repellendus quo accusantium sint provident ut iure impedit, est, molestiae eaque maiores? Modi in assumenda neque distinctio praesentium corporis, sapiente ipsum. Illo earum necessitatibus, eum odio nisi reiciendis? Alias, repudiandae! Quos mollitia quia voluptate! Totam dignissimos consequuntur, nostrum odio dicta repellat numquam omnis veritatis quos neque exercitationem modi, delectus praesentium hic provident earum error. Tenetur dignissimos voluptatibus reprehenderit necessitatibus odio ducimus error repellat id debitis sit quae quos ex doloremque quibusdam quis, corporis eius quasi dicta possimus impedit! Possimus veniam non illo facere dolor ea nulla totam veritatis sit error. Iusto doloribus omnis fugiat dolor voluptate harum laudantium maxime maiores officia porro architecto tempore recusandae aliquam quos reprehenderit quae, libero mollitia, dolore, natus quidem ipsam ullam eligendi deleniti. Explicabo laboriosam earum dolores pariatur mollitia magnam reprehenderit iure nemo, voluptates autem modi quibusdam cum officiis, non dolorem facere. Odit pariatur eius minima accusamus qui quos eligendi ipsa rem debitis, molestiae eos corporis necessitatibus ab quo, nulla ratione vel, omnis porro cum consequatur! Recusandae quae consectetur eius ratione, dolor maiores et sint nisi facilis aperiam accusamus. Repudiandae doloribus architecto totam veniam at molestiae eligendi autem deserunt impedit, quas distinctio ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"quaerat corrupti aut facilis illo placeat enim ea. Distinctio voluptate quia reiciendis sequi tempore harum explicabo id minima doloremque eaque, veniam, dignissimos provident obcaecati. Aut laborum, exercitationem amet voluptas voluptatibus deleniti atque soluta minus temporibus. Facilis sit provident perferendis quam reprehenderit nesciunt reiciendis praesentium voluptatum, quos error assumenda, accusantium ipsa vero voluptatem consequatur suscipit mollitia deserunt ut dolorum fugit velit aperiam nam quibusdam necessitatibus? Quasi quo quis officia eveniet debitis totam nesciunt at natus, aliquam voluptatem laudantium. Facere sit dolorum culpa qui officiis dicta illo fugiat nobis rem consectetur ab odio corporis ducimus atque veniam minima provident explicabo nemo nam, ex consequatur cum saepe. Quasi non iure magnam tempora facilis odit eveniet, labore, quam sint iste obcaecati omnis fugiat quas nam deleniti sit repellat laudantium enim dicta minima eos! Assumenda sunt odit nisi. Corporis, dignissimos natus! Repellat, veniam obcaecati. Similique vero odit blanditiis eos fugit ea! Natus facere, excepturi esse, aperiam adipisci soluta atque doloremque odio fugiat voluptate nam! Deserunt aut ipsum, laborum asperiores mollitia odio, aspernatur hic eos suscipit officia iure eveniet commodi cupiditate, impedit et ea ipsa fuga dicta eius temporibus quibusdam ullam delectus tenetur eum. Tempore minima consequuntur accusamus. Animi, quaerat. Neque illo nihil deleniti rerum aperiam inventore consectetur saepe dicta distinctio. Animi, dolorum obcaecati quia, quod quas voluptatibus incidunt iure beatae qui modi minus sequi inventore laboriosam culpa asperiores iste veritatis ipsam magnam minima magni vitae architecto quaerat accusantium. Quas magni tempora suscipit doloremque quibusdam aliquam eaque sapiente, blanditiis, ipsum, excepturi animi tempore. Eveniet perferendis maiores repellat minus nesciunt aut, cum, doloremque corporis eos, perspiciatis quod iure ullam magnam laudantium pariatur omnis saepe nam exercitationem. Aspernatur a facere modi quisquam reprehenderit molestias, veritatis veniam. Nisi, reiciendis ad itaque facere recusandae incidunt delectus quam consequatur quisquam. Sed, earum sit! Illum ex quam inventore vero error placeat adipisci, eum qui officiis?"]})]})}),y=function(){return Object(c.jsxs)("div",{className:"privacypage",children:[Object(c.jsxs)("h1",{className:"heading",children:["terms of ",Object(c.jsx)("span",{children:"use"})]}),Object(c.jsxs)("p",{children:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nobis libero vel ullam facere quaerat, recusandae magni omnis tenetur et, velit totam amet culpa molestiae sequi quisquam impedit hic perferendis rerum ad qui debitis. Reiciendis, non odio delectus quae commodi numquam ipsam est fugit beatae officia esse veritatis aspernatur nisi. Dolorum natus quibusdam vitae nisi ad doloremque ea, sequi explicabo saepe nesciunt dicta fugit porro corrupti laudantium voluptatibus. Perferendis reprehenderit officiis amet, impedit quaerat ratione distinctio beatae similique repudiandae omnis enim sunt suscipit laborum nisi eum nostrum officia eius error. Molestiae, magni facere eum libero ipsum expedita aut deserunt nesciunt dolorum? Autem recusandae veniam distinctio dicta itaque natus minus dolor placeat mollitia ullam. Modi error explicabo iusto excepturi illo sit maxime ipsum tempora, at expedita? Magni, distinctio. Corrupti molestiae assumenda doloribus magnam! Commodi quasi molestiae veniam eaque, fugiat ullam vero dolor beatae error sed ducimus, pariatur tempore provident autem nisi facilis ad, quod laboriosam dolorum aut dolore enim quam. Molestiae quasi at ab sit deleniti ex quod atque doloribus beatae obcaecati magnam aliquid cum, voluptatibus facilis, eligendi soluta inventore laboriosam commodi non esse! Dolorem omnis hic id similique odio eveniet, ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," accusantium provident iusto magni quis neque sapiente animi est eius eaque rem. Obcaecati, ex. Exercitationem fugiat dolore, possimus dolorum numquam animi voluptas beatae nemo ratione perferendis facere dicta suscipit error, ullam culpa ipsam expedita incidunt eius quibusdam blanditiis sunt at quasi distinctio? Voluptas ipsam ex, reiciendis a at beatae est molestias totam optio quod soluta non facilis, ab consectetur ratione nesciunt quibusdam quisquam harum maxime explicabo! Culpa repellat laboriosam consequuntur, iusto in fuga, quos nihil qui ex esse laborum recusandae distinctio impedit veritatis porro accusamus. Voluptatem facilis modi quasi nam rem, veniam similique distinctio laborum velit cumque voluptas vitae eveniet, earum eligendi sequi necessitatibus commodi blanditiis nulla laboriosam quos dignissimos debitis. ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," Dicta vitae perspiciatis harum dolore ipsam aliquam! Vitae quis impedit ab placeat repudiandae animi illo ea corporis et nihil eum incidunt iusto mollitia aut optio unde quam, nesciunt deserunt laborum voluptatum error nulla aliquid dignissimos hic? Qui quibusdam, quasi repudiandae eveniet culpa nesciunt optio eaque harum in porro iusto. Fuga qui, impedit et sint perspiciatis dolores saepe dicta explicabo, ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," eligendi libero rerum maiores, omnis corporis nesciunt voluptates repellat odit velit quis quam. Nam ullam tempora fugit sed ut eius fugiat nulla quis quibusdam impedit, reprehenderit maxime voluptatem ratione nisi voluptatibus accusamus omnis dolores ipsum corrupti saepe commodi. Eveniet alias possimus corporis facere. Aliquam, accusamus repudiandae architecto fugit voluptatibus iusto aut, quas possimus non nesciunt reiciendis enim id eum recusandae necessitatibus reprehenderit doloremque molestiae veritatis eaque aperiam vel, nihil quibusdam magnam? Numquam tempore id porro molestias placeat officia, fuga tempora quasi sed quam, dignissimos maiores delectus quod rem aliquam ea odio alias facere saepe! Voluptate voluptatum, ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," veniam quo fuga repudiandae at esse quos molestiae, repellendus nihil soluta ut natus ipsa sint eum qui animi placeat, error atque ipsum voluptatem cumque. Quidem doloribus doloremque provident? Quaerat alias asperiores quo accusantium ipsa ducimus modi ullam deserunt autem. Adipisci, veritatis autem eligendi culpa in eos eveniet dolorem nisi perspiciatis corrupti doloribus laborum neque repellendus quo accusantium sint provident ut iure impedit, est, molestiae eaque maiores? Modi in assumenda neque distinctio praesentium corporis, sapiente ipsum. Illo earum necessitatibus, eum odio nisi reiciendis? Alias, repudiandae! Quos mollitia quia voluptate! Totam dignissimos consequuntur, nostrum odio dicta repellat numquam omnis veritatis quos neque exercitationem modi, delectus praesentium hic provident earum error. Tenetur dignissimos voluptatibus reprehenderit necessitatibus odio ducimus error repellat id debitis sit quae quos ex doloremque quibusdam quis, corporis eius quasi dicta possimus impedit! Possimus veniam non illo facere dolor ea nulla totam veritatis sit error. Iusto doloribus omnis fugiat dolor voluptate harum laudantium maxime maiores officia porro architecto tempore recusandae aliquam quos reprehenderit quae, libero mollitia, dolore, natus quidem ipsam ullam eligendi deleniti. Explicabo laboriosam earum dolores pariatur mollitia magnam reprehenderit iure nemo, voluptates autem modi quibusdam cum officiis, non dolorem facere. Odit pariatur eius minima accusamus qui quos eligendi ipsa rem debitis, molestiae eos corporis necessitatibus ab quo, nulla ratione vel, omnis porro cum consequatur! Recusandae quae consectetur eius ratione, dolor maiores et sint nisi facilis aperiam accusamus. Repudiandae doloribus architecto totam veniam at molestiae eligendi autem deserunt impedit, quas distinctio ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"quaerat corrupti aut facilis illo placeat enim ea. Distinctio voluptate quia reiciendis sequi tempore harum explicabo id minima doloremque eaque, veniam, dignissimos provident obcaecati. Aut laborum, exercitationem amet voluptas voluptatibus deleniti atque soluta minus temporibus. Facilis sit provident perferendis quam reprehenderit nesciunt reiciendis praesentium voluptatum, quos error assumenda, accusantium ipsa vero voluptatem consequatur suscipit mollitia deserunt ut dolorum fugit velit aperiam nam quibusdam necessitatibus? Quasi quo quis officia eveniet debitis totam nesciunt at natus, aliquam voluptatem laudantium. Facere sit dolorum culpa qui officiis dicta illo fugiat nobis rem consectetur ab odio corporis ducimus atque veniam minima provident explicabo nemo nam, ex consequatur cum saepe. Quasi non iure magnam tempora facilis odit eveniet, labore, quam sint iste obcaecati omnis fugiat quas nam deleniti sit repellat laudantium enim dicta minima eos! Assumenda sunt odit nisi. Corporis, dignissimos natus! Repellat, veniam obcaecati. Similique vero odit blanditiis eos fugit ea! Natus facere, excepturi esse, aperiam adipisci soluta atque doloremque odio fugiat voluptate nam! Deserunt aut ipsum, laborum asperiores mollitia odio, aspernatur hic eos suscipit officia iure eveniet commodi cupiditate, impedit et ea ipsa fuga dicta eius temporibus quibusdam ullam delectus tenetur eum. Tempore minima consequuntur accusamus. Animi, quaerat. Neque illo nihil deleniti rerum aperiam inventore consectetur saepe dicta distinctio. Animi, dolorum obcaecati quia, quod quas voluptatibus incidunt iure beatae qui modi minus sequi inventore laboriosam culpa asperiores iste veritatis ipsam magnam minima magni vitae architecto quaerat accusantium. Quas magni tempora suscipit doloremque quibusdam aliquam eaque sapiente, blanditiis, ipsum, excepturi animi tempore. Eveniet perferendis maiores repellat minus nesciunt aut, cum, doloremque corporis eos, perspiciatis quod iure ullam magnam laudantium pariatur omnis saepe nam exercitationem. Aspernatur a facere modi quisquam reprehenderit molestias, veritatis veniam. Nisi, reiciendis ad itaque facere recusandae incidunt delectus quam consequatur quisquam. Sed, earum sit! Illum ex quam inventore vero error placeat adipisci, eum qui officiis?"]})]})};var C=function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{}),Object(c.jsxs)(n.c,{children:[Object(c.jsx)(n.a,{path:"/search",exact:!0,element:Object(c.jsx)(x,{})}),Object(c.jsx)(n.a,{path:"/rate",exact:!0,element:Object(c.jsx)(O,{})}),Object(c.jsx)(n.a,{path:"/privacy",exact:!0,element:Object(c.jsx)(N,{})}),Object(c.jsx)(n.a,{path:"/terms",exact:!0,element:Object(c.jsx)(y,{})}),Object(c.jsx)(n.a,{path:"/",exact:!0,element:Object(c.jsx)(h,{})})]}),Object(c.jsx)(v,{})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(i){var a=i.getCLS,t=i.getFID,s=i.getFCP,u=i.getLCP,o=i.getTTFB;a(e),t(e),s(e),u(e),o(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),w()}],[[30,1,2]]]);
//# sourceMappingURL=main.b359e24e.chunk.js.map