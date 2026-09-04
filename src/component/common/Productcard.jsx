import React from 'react'

const styles = {
  card: {
    boxShadow: '0 10px 15px rgba(0,0,0,0.08)',
    borderRadius: '16px',
    color: '#374151',
    fontSize: '12px',
    marginTop: '40px',
    border: '1px solid #F3C123',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  img: { width: '100%', height: '192px', objectFit: 'cover', display: 'block' },
  content: { padding: '12px' },
  title: { textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  category: { textAlign: 'center', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  priceRow: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '8px' },
  price: { fontWeight: 600 },
  original: { fontSize: '10px', color: '#6b7280', textDecoration: 'line-through' },
}

const Productcard = ({ image, name, price, originalPrice, category }) => {

  return (
    <div>
      <div style={styles.card}>
        <img style={styles.img} src={image} alt={name || 'product'} />
        <div style={styles.content}>
          <h1 style={styles.title}>{name}</h1>
          <h1 style={styles.category}>{category}</h1>

          <div style={styles.priceRow}>
            <p style={styles.price}>₹{price}</p>
            {originalPrice && <p style={styles.original}>₹{originalPrice}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productcard
