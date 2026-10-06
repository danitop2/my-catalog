import React from 'react';

export function ProductCard({ product }) {
  // Заглушка на случай, если картинка не загрузится
  const fallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23eee' width='200' height='200'/%3E%3Ctext fill='%23999' x='50%25' y='55%25' text-anchor='middle' font-size='14' font-family='sans-serif'%3E${encodeURIComponent(product.category)}%3C/text%3E%3C/svg%3E`;

  return (
    <article style={{
      border: '1px solid #e0e0e0',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        background: '#fff',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => { e.target.src = fallback; }}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: 1.4 }}>{product.title}</h3>
      <p style={{ margin: '8px 0 4px', color: '#666', fontSize: '0.85rem' }}>
        Категория: {product.category}
      </p>
      <p style={{ margin: 'auto 0 0', fontWeight: 'bold', fontSize: '1.2rem', color: '#111' }}>
        {product.price.toLocaleString('ru-RU')} ₽
      </p>
    </article>
  );
}