import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const productData = [
  { id: 1, name: 'Toy Car', purchases: 40 },
  { id: 2, name: 'Doll', purchases: 30 },
  { id: 3, name: 'Lego Set', purchases: 20 },
  { id: 4, name: 'Puzzle', purchases: 50 },
  { id: 5, name: 'Action Figure', purchases: 60 },
];

const AdminDashboard = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const [products, setProducts] = useState(productData);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState('');

  if (!isAuthenticated || currentUser.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setEditedProductName(product.name);
  };

  const handleSaveProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, name: editedProductName } : product
      )
    );
    setEditingProductId(null);
    setEditedProductName('');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
        Admin Dashboard
      </Typography>
      <Typography variant="h6" sx={{ color: 'black' }}>
        Welcome, {currentUser.name}. You are logged in as an admin.
      </Typography>
      
      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
          Most Purchased Products
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="purchases" fill="#00796b" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      <Paper sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
          Product List
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'black' }}>Product Name</TableCell>
                <TableCell align="right" sx={{ color: 'black' }}>Purchases</TableCell>
                <TableCell align="right" sx={{ color: 'black' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell sx={{ color: 'black' }}>
                    {editingProductId === product.id ? (
                      <TextField
                        value={editedProductName}
                        onChange={(e) => setEditedProductName(e.target.value)}
                        variant="standard"
                        sx={{ color: 'black' }}
                      />
                    ) : (
                      product.name
                    )}
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'black' }}>
                    {product.purchases}
                  </TableCell>
                  <TableCell align="right">
                    {editingProductId === product.id ? (
                      <IconButton color="primary" onClick={() => handleSaveProduct(product.id)}>
                        <SaveIcon />
                      </IconButton>
                    ) : (
                      <IconButton color="primary" onClick={() => handleEditProduct(product)}>
                        <EditIcon />
                      </IconButton>
                    )}
                    <IconButton color="error" onClick={() => handleRemoveProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
