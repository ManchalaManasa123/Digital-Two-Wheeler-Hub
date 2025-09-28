// src/pages/ListingPage.jsx
import React, { useState, useEffect } from 'react';
import BikeCard from '../components/BikeCard';
import FilterBar from '../components/FilterBar';
import Button from '../components/UI/Button';
import { MOCK_BIKES } from '../data/bikes'; // Mock Data

const ListingPage = () => {
  const [allBikes] = useState(MOCK_BIKES);
  const [displayBikes, setDisplayBikes] = useState(MOCK_BIKES);
  const [filters, setFilters] = useState({ 
    search: '', 
    fuelType: '', 
    vehicleType: '',
    maxPrice: 300000 // Default max price
  });
  const [compareList, setCompareList] = useState([]);

  // Filter Logic
  const applyFilters = () => {
    let filtered = allBikes.filter(bike => {
      // 1. Search Filter (Case-insensitive match on name or brand)
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName = bike.name.toLowerCase().includes(searchLower);
        const matchesBrand = bike.brand.toLowerCase().includes(searchLower);
        if (!matchesName && !matchesBrand) return false;
      }
      // 2. Fuel Type Filter
      if (filters.fuelType && bike.fuelType !== filters.fuelType) return false;
      // 3. Vehicle Type Filter (Using the 'type' property from mock data)
      if (filters.vehicleType && bike.type !== filters.vehicleType) return false;
      // 4. Max Price Filter
      if (bike.price > filters.maxPrice) return false;
      
      return true;
    });

    setDisplayBikes(filtered);
  };
  
  // Apply filters on initial load and when button is clicked
  useEffect(() => {
      applyFilters(); 
  }, []); // Run only once on mount to set initial displayBikes

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleCompareToggle = (bike) => {
    setCompareList(prev => 
      prev.find(b => b.id === bike.id) 
        ? prev.filter(b => b.id !== bike.id) 
        : [...prev, bike].slice(0, 3) 
    );
  };

  const pageStyle = {
    display: 'flex',
    maxWidth: '1200px',
    margin: '20px auto',
    gap: '20px'
  };

  return (
    <div style={pageStyle}>
      
      {/* 1. Filter Sidebar */}
      <FilterBar 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        onApply={applyFilters} 
      />

      {/* 2. Listings Area */}
      <div style={{ flexGrow: 1, paddingRight: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Available Two-Wheelers ({displayBikes.length} Found)</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {displayBikes.length === 0 ? (
            <p style={{ padding: '20px' }}>No two-wheelers match your criteria. Try adjusting your filters.</p>
          ) : (
            displayBikes.map(bike => (
              <BikeCard key={bike.id} bike={bike} onCompareToggle={handleCompareToggle} />
            ))
          )}
        </div>
      </div>
      
      {/* 3. Comparison Bar */}
      {compareList.length > 0 && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#007bff', color: 'white', padding: '10px', textAlign: 'center', zIndex: 100 }}>
          **Comparing {compareList.length} Bike(s):** {compareList.map(b => <span key={b.id} style={{ margin: '0 15px' }}>{b.name}</span>)}
          <Button variant="secondary" onClick={() => alert("Go to Compare Page!")} style={{ backgroundColor: '#28a745', border: 'none' }}>
            View Comparison
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListingPage;