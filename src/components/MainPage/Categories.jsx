import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Tecnologia Agrícola      ",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Ferramentas e Equipamentos",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Sementes e Mudas",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Produtos Biológicos",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Painéis Solares",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Maquinas",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Hidroponia",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Aquaponia",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Aeroponia",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Estufas",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
