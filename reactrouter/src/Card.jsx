function Card({ title, body }) {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }

  export default Card;