import React from 'react';

type Props = {
    params : {
        slug : string
    };
};   

export default function page({params} : Props) {
    return (
        <div>
            <h1>{params.slug} page</h1>
        </div> 
    );
}

export function generateStaticParams() {
    const products = ['product-1', 'product-2', 'product-3'];
    return products.map((product) => ({
        params: {
            slug : product,
        }
    }));
}
