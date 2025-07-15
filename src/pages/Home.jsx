import React, { useState } from 'react';

const ProductSection = () => {
    // Usando imágenes de placeholder para la demostración
    const products = [
        {
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
            title: 'Polo Estilo Minimalista',
            description: 'Polo cómodo y moderno, ideal para cualquier ocasión.',
            url: '/productos/polos',
            price: '$45.00',
            color: 'Negro'
        },
        {
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop',
            title: 'Taza de Cerámica Premium',
            description: 'Perfecta para tus bebidas favoritas, diseño elegante.',
            url: '/productos/tazas',
            price: '$28.00',
            color: 'Blanco'
        },
        {
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
            title: 'Accesorios Únicos',
            description: 'Encuentra todo lo que necesitas para complementar tu estilo.',
            url: '/productos/accesorios',
            price: '$35.00',
            color: 'Variado'
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Container principal */}
            <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
                    
                    {/* Columna izquierda - Información del producto */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                        {/* Badge de categoría */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            Producto Destacado
                        </div>

                        {/* Título principal */}
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {selectedProduct.title}
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                {selectedProduct.description}
                            </p>
                        </div>

                        {/* Información adicional */}
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
                                <span className="text-gray-600">Color: {selectedProduct.color}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-gray-900">{selectedProduct.price}</span>
                                <span className="text-gray-500 line-through">$60.00</span>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={selectedProduct.url}
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                            >
                                <span className="mr-2">Ver Producto</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                            
                            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:border-black hover:bg-gray-50">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Favoritos
                            </button>
                        </div>

                        {/* Características */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-gray-900">Envío</h4>
                                <p className="text-sm text-gray-600">Gratis en 24h</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-gray-900">Garantía</h4>
                                <p className="text-sm text-gray-600">12 meses</p>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Imagen y miniaturas */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {/* Imagen principal con efectos mejorados */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-3xl"></div>
                                <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay con información rápida */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <button 
                                                onClick={() => setIsModalOpen(true)}
                                                className="bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                                            >
                                                Vista Rápida
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Miniaturas rediseñadas */}
                            <div className="flex justify-center mt-6 space-x-4">
                                {products.map((product, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedProduct(product)}
                                        className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                                            selectedProduct.image === product.image
                                                ? 'ring-4 ring-black ring-offset-2 shadow-lg scale-105'
                                                : 'ring-2 ring-gray-200 hover:ring-gray-400 hover:scale-105'
                                        }`}
                                        aria-label={`Seleccionar ${product.title}`}
                                    >
                                        <img
                                            src={product.image}
                                            alt={`Miniatura ${product.title}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        {/* Indicador de selección */}
                                        {selectedProduct.image === product.image && (
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Indicadores de producto */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {products.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            selectedProduct === products[index]
                                                ? 'bg-black w-6'
                                                : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Vista Rápida */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header del modal */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">Vista Rápida</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contenido del modal */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Imagen del producto */}
                                <div className="space-y-4">
                                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Miniaturas en el modal */}
                                    <div className="flex space-x-3">
                                        {products.map((product, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedProduct(product)}
                                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                                    selectedProduct.image === product.image
                                                        ? 'border-black'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Información del producto */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                            {selectedProduct.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg">
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    {/* Precio */}
                                    <div className="flex items-center space-x-3">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {selectedProduct.price}
                                        </span>
                                        <span className="text-xl text-gray-500 line-through">
                                            $60.00
                                        </span>
                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                                            25% OFF
                                        </span>
                                    </div>

                                    {/* Detalles del producto */}
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>• Color: {selectedProduct.color}</li>
                                                <li>• Material: Algodón Premium</li>
                                                <li>• Garantía: 12 meses</li>
                                                <li>• Envío: Gratis en 24h</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Tallas disponibles:</h4>
                                            <div className="flex space-x-2">
                                                {['S', 'M', 'L', 'XL'].map((size) => (
                                                    <button
                                                        key={size}
                                                        className="w-10 h-10 border border-gray-300 rounded-lg hover:border-black transition-colors flex items-center justify-center text-sm font-medium"
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Botones de acción */}
                                    <div className="space-y-3">
                                        <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                            Añadir al Carrito
                                        </button>
                                        <a
                                            href={selectedProduct.url}
                                            className="w-full block text-center border-2 border-gray-200 py-4 rounded-lg font-medium hover:border-black transition-colors"
                                        >
                                            Ver Página Completa
                                        </a>
                                    </div>

                                    {/* Información adicional */}
                                    <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                            <span>Envío gratis</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Garantía 12 meses</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sección adicional de características */}
            <div className="border-t border-gray-200 bg-gray-50/50">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center space-y-2">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Envío Gratis</h3>
                            <p className="text-sm text-gray-600">En pedidos superiores a $50</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Garantía Total</h3>
                            <p className="text-sm text-gray-600">12 meses de garantía</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900">Soporte 24/7</h3>
                            <p className="text-sm text-gray-600">Atención al cliente siempre</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;