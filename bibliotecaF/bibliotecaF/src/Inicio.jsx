import React, {useState, useEffect} from "react";
import Titulo from "./components/Titulo"
import Campo from "./components/Campo";
import Conteudo from "./components/Conteudo";
import axios from "axios"



export default function Inicio(){
    const [ codigos, definirCodigos ] = useState([]) 
    const [ conteudos, definirConteudos ] = useState({})

    useEffect(function(){
    
    axios.get("http://localhost:4000/api")

    .then(function(resposta){
        const dados = resposta.data 
        const lista = Object.keys(dados)
    
        definirCodigos(lista)
        definirConteudos(dados)   
    })
    .catch(function(erro){
        console.log(erro)
    })
    })
    return<>
    <Titulo 
    nome="Biblioteca"
    imagem="https://c0.wallpaperflare.com/preview/700/360/51/bible-wallpaper-devotional-bible-study.jpg"
    />
    <Campo>
        {

            

            codigos.map(function(codigo){
            return <Conteudo
                key= {codigo}
                capa = {conteudos[codigo].capa}
                titulo = {conteudos[codigo].titulo}
                genero = {conteudos[codigo].genero}
                ano = {conteudos[codigo].ano}
                autor = {conteudos[codigo].autor}
            />
            
        })
    }

    </Campo>
        
    </>
}
