import React, { useState } from 'react';

function HorizontalSearchForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here, e.g., make an API call with the selected values
    console.log('Search:', { from, to, date });
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <div className="flex-1 mr-2">
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={from}
          onChange={handleFromChange}
          className="input-field"
        />
      </div>
      <div className="flex-1 mr-2">
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={to}
          onChange={handleToChange}
          className="input-field"
        />
      </div>
      <div className="flex-1 mr-2">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="input-field"
        />
      </div>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default HorizontalSearchForm;