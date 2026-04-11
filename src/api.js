// API Base URL - matches your FastAPI backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Export for use in other components
export default API_BASE_URL;