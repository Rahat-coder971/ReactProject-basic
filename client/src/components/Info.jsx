import Card from "./Card";
function Info({activetab}){

const deatail={
    home:{
        tittle:"Fashion Hub - Your Style, Your Choice",
       product: [
             {
                  img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8R3OY_8KbrtHAMgktkO9TH8rlFkF4zG_XSE8IRANJ0Veek_84AWjRXYfttqGDtg74gPiW87p7QamXaT0E0stf9szhZsdMWRCfQljtjVw2oXXDv4Gq_ivd&usqp=CAc',
                  tittle:"Men Regular Mid Rise Light Blue Jeans",
                  RS:'699'
             },
            {
                img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWNp1bdmJfdcv1Oa0GToE2FOUhjnUAmQJmh0-YeLJ6cQwz6HDcp7-1mqTnU4JnwwNWrbgszH9DOMckMZ3mZfzA5mLXX5eiOJZJH8y-HRbiwkSiNdjJbDNB',
                tittle:'FUNDAY FASHION Womens Printed Oversized Relaxed Fit T-Shirt',
                RS:'500'
            },
            {
                img:'https://cdn.staticans.com/image/tr:e-sharpen-01,h-650,w-488,cm-pad_resize/data/metzi/11oct2024/1MZ0611_02_01.JPG',
                tittle:'Cashmere Blue Fearless Patchwork Oversized Graphic Edgewear',
                RS:'399'
            },
            {
                img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgwmG3my3A4egndvsBT5vK-4yFZO7-pd1I60eDy8YAtBSOp_blkcByBM7mvmibTJ0nxXs9epnGm3VilXfY-FCdTiEH-murBCuwIAq5Dbc',
                tittle:'The Souled Store Womens  Solid Round Neck Oversized T-Shirt',
                RS:'650'
            },
            {
                img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAtE2IkdMeMAXBsk1InPLtlDcCSqVpaB3o84xFLUidrajfy49G1aTAAsAJ8O8qAbTenjuHS0km2svWrh8kIyY1Wu4r04nsziwYWFo1XdhR3VzHfP7kbL82Dw',
                tittle:'Korean Style Zip Details Long-Sleeved Shirt',
                RS:'459'
            },
            {
                img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQN_o_aMvJ2YzMQWd1C7vBjqhQIIDajfhumy56n67qRVFRzXgp-HmdTwn_1H1sWLIsaPaTLZutHKpfa_Rns0VjKMZNlxhYw11Cd3sirj5aVCjaQRDENMs2OhWBJQ-9rAzOU3EUMfaoWLg&usqp=CAc',
                tittle:'Premium Cotton T-shirtupdated unisex essential fits like a well-loved favourite.',
                RS:'399'
            }
        ]
    },

    Shirts:{
        tittle:'Classic & Casual Shirts - Elevate Your Look',
        product:[
            {
                img:'data:image/webp;base64,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',
                tittle:'Urbano Fashion Men\'s Full Sleeve Regular Fit Solid Casual Shirt',
                RS:'599'
            },
            {
                img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT71zgzHQ6s4GwF0eUxz6372HaAmn9XiXnUBTb1RM1wPEGlFgNdqHbFCiIqasVbZtqXmJPF6t7-A-XBHN_7IXSbuMi_PjO-I6Y_zpG35k_kbyYTRbt4dOaz6w',
                tittle:'The Souled Store Men\'s Graphic Printed Casual Shirt',
                RS:'459'
            },
            {
                img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQb0bbxICbDy6XxBfAFBOAH8RmbFzU3cUbtczUtbftQpSkQe-i37nX6Cv0gTDuyes7gURZcZ3OY96xc_0huqjUzkgQGTthe4l0uKZQczLY',
                tittle:'Leriya Fashion Men\'s Casual Regular Fit Western Shirt',
                RS:'699'
            },
            {
                img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSCRYyl6iSI3tm8ijTTXW9Rr-74f10hlsTHPT8pmDF40xyL0ZL9AU5NZhZLVAg0I915KlY5muFmFg9eujQOlXaAwvhYBEAUs5ax1u365RUtfoEVjBzu_zEC',
                tittle:'Leriya Fashion Men\'s Casual Regular Fit Western Shirt',
                RS:'499'
            }
        ]

    },
    TShirts:{
        tittle: 'Trendy T-Shirts - Comfort Meets Style',
        product:[
            {
                img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7sS2u26T5rm1oCemjyzJQATpsarSYOkK-zMRv34Px2QkozwktRoR8DTFNhlhqHDyHB1YPP0a2VBPxWFM7728pbfEMKw-JInxNopjTYnRm1-C40IZ5EC4J',
                tittle:'FRATINI Men\'s Solid Blended Fabric Round Neck T-Shirt',
                RS:'399'
            },
            {
                img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmjoIgm0YSgpl_iV44Uh8zIXHZsH7ZCk810tTRy4mkxKL0e2mmgTU0QBxokSEWoJXWAg69yBuG0l_W9Z-jxhuH604MhPH9xarbUSTmyY6-',
                tittle:'Urbano Fashion Men\'s Printed Full Sleeve Slim Fit T-Shirt',
                RS:'299'
            },
            {
                img:'https://cdn.staticans.com/image/tr:e-sharpen-01,h-650,w-488,cm-pad_resize/data/metzi/11oct2024/1MZ0611_02_01.JPG',
                tittle:'Cashmere Blue Fearless Patchwork Oversized Graphic Edgewear',
                RS:'399'
            },
            {
                img:'https://cdn.staticans.com/image/tr:e-sharpen-01,h-650,w-488,cm-pad_resize/data/metzi/11oct2024/1MZ0604_01_01.JPG',
                tittle:'Irish Cream Keep Moving Graphic Oversized Tshirt Edgewear',
                RS:'459'
            },
            {
                img:'https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-357,cm-pad_resize/data/metzi/11oct2024/1MZ0606_01_01.JPG',
                tittle:'Cloudburst Gray Embroided Graphic Oversized Edgewear',
                RS:'359'
            },
            {
                img:'https://urturms.com/cdn/shop/files/02_09798b3d-1c38-4284-9fae-facc363a3627.jpg?v=1725880415&width=2000',
                tittle:'Cashmere Blue Fearless Patchwork Oversized Graphic Edgewear',
                RS:'699'
            }

        ]
    },

    Jeans:{
        tittle:'Denim Collection - Timeless & Trendy',
        product:[
         {
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8R3OY_8KbrtHAMgktkO9TH8rlFkF4zG_XSE8IRANJ0Veek_84AWjRXYfttqGDtg74gPiW87p7QamXaT0E0stf9szhZsdMWRCfQljtjVw2oXXDv4Gq_ivd&usqp=CAc',
            tittle:"Men Regular Mid Rise Light Blue Jeans",
            RS:'699'
         },
         {
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTISzHRFezM_X7ZrDITLWL3FyjVPY7zDWmwiYHVYteM9wrd6I6FjAUbtn398X1qKIKye0VNSkvetkJBItzFJwELBQ7GuPI3nvcykDburLW2pyqH9zE_fc5A4289tyD_CMrOwuIFCQd8bw&usqp=CAc',
            tittle:"Move Easy Straight Jeans: Blue",
            RS:'799'
         },
         {
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQZcUox5Dj77MKtSSUzslU-JCQTiMiz7KNHdgAOHoeLZ3KZyQqDqDlCEeuuuoQBRP-5yh2kHdv7j-fe_Ityxw90DIW8auiX-ara445TdeMdQ9Xv2ygRsHXUZA&usqp=CAc',
            tittle:"Men Blue Washed Skinny Fit Mid-Rise Jeans",
            RS:'888'
         },
         {
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8R3OY_8KbrtHAMgktkO9TH8rlFkF4zG_XSE8IRANJ0Veek_84AWjRXYfttqGDtg74gPiW87p7QamXaT0E0stf9szhZsdMWRCfQljtjVw2oXXDv4Gq_ivd&usqp=CAc',
            tittle:"Men Regular Mid Rise Light Blue Jeans",
            RS:'699'
         },
         {
            img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvwne92PN3pkQhKOmcytZVYxuNL5yFtLE_zCVzUc1Slassy3fl6oAG0f_S0efMHXiWsFEx9PmYe8kK-3IIKVCeLrfey1iNOInEB_jpPUeR8Y5MpfE4o--gMgneouRInxrIGi8XdPn_t5k&usqp=CAc',
            tittle:"SKINNY FIT JEANS",
            RS:'567'
         }
        ]
    }
}


    return (
    <div className="mt-4 ">
        <h1 className="text-center font-semibold text-xl ">{deatail[activetab].tittle}</h1>
        
        <div className=" flex  justify-center flex-col items-center	 mx-auto gap-5 p-4 sm:flex-wrap sm:flex-row  ">
            {deatail[activetab].product.map((data,ind)=>{
                return(
                    <Card key={ind} img={data.img} tittle={data.tittle} RS={data.RS}/>
                )
            })}
        </div>
    </div>
    
    )
}
export default Info;