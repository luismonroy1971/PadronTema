import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { CSVLink } from 'react-csv';

const ReportGenerator = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 25, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 30, country: 'Canada' },
    // Add more data...
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 130 },
    { field: 'country', headerName: 'Country', width: 130 },
    // Add more columns if needed...
  ];
  const [selectedFields, setSelectedFields] = useState(
    columns.map((col) => col.field)
  );
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [open, setOpen] = useState(false);

  const handleFieldChange = (field) => {
    setSelectedFields((prevFields) =>
      prevFields.includes(field)
        ? prevFields.filter((f) => f !== field)
        : [...prevFields, field]
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setFilteredData(
      data.filter((row) =>
        columns.some((col) =>
          row[col.field]
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      )
    );
  };

  const exportToPDF = () => {
    const printWindow = window.open('', '_blank');
    const tableHtml = document.getElementById('report-table').outerHTML;
    printWindow.document.write(`
      <html>
        <head>
          <title>Report</title>
        </head>
        <body>
          ${tableHtml}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TextField label="Filter" value={filter} onChange={handleFilterChange} />
      <Button variant="contained" onClick={handleOpen}>
        Seleccionar Campos
      </Button>
      <Button variant="contained" onClick={exportToPDF}>
        Exportar a PDF
      </Button>
      <CSVLink
        data={filteredData}
        headers={selectedFields.map((field) => ({ label: field, key: field }))}
        filename="report.csv"
      >
        <Button variant="contained">Exportar a CSV</Button>
      </CSVLink>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Seleccionar campos</DialogTitle>
        <DialogContent>
          {columns.map((col) => (
            <FormControlLabel
              key={col.field}
              control={
                <Checkbox
                  checked={selectedFields.includes(col.field)}
                  onChange={() => handleFieldChange(col.field)}
                />
              }
              label={col.headerName}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      <div id="report-table" style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns.filter((col) => selectedFields.includes(col.field))}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default ReportGenerator;
