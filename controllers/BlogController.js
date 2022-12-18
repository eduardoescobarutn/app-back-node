// Importo el modelo

import BlogModel from "../models/BlogModel.js";

// Metodos

// Muestro todos los registros.

export const getAllArticulos = async (req,res) => {
    try {
        const articulos = await BlogModel.findAll()
        res.json(articulos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

// Muestro un solo articulo

export const getArticulo = async (req, res) => {
    try {
        const articulo = await BlogModel.findAll({
            where: {id:req.params.id}
        })
        res.json(articulo[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// Creo articulo

export const createArticulo = async (req,res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            message: 'Articulo creado correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Modifico articulo

export const updateArticulo = async (req,res) =>{
    try {
        await BlogModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            message: 'Articulo actualizado correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Elimino articulo

export const deleteArticulo = async (req,res) =>{
    try {
        await BlogModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            message: 'Articulo eliminado correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
