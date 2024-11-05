'use client';

import React from 'react';
import { useEffect, useState } from 'react';


interface Perfume {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem {
  perfumeId: Perfume;
}

interface Cart {
  userId: string;
  perfumes: CartItem[];
}

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart/view', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart');
        }

        const data = await response.json();
        setCart(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) {
    return (
      <div >
       loading
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  if (!cart || cart.perfumes.length === 0) {
    return (
      <div >
        Your cart is empty
      </div>
    );
  }

  return (
    <div >
      <h1 >Shopping Cart</h1>
      <div >
        {cart.perfumes.map((item) => (
          <div key={item.perfumeId._id}>
            <div >
              {item.perfumeId.image && (
                <img
                  src={item.perfumeId.image}
                  alt={item.perfumeId.name}
                 
                />
              )}
              <div >
                <h3 >{item.perfumeId.name}</h3>
                
                <p >
                  ${item.perfumeId.price}
                </p>
              </div>
            </div>
          </div>
        ))}
       
        <div >
          
        </div>
      </div>
    </div>
  );
}
