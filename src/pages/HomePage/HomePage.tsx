import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeTemplate from 'templates/HomeTemplate/HomeTemplate';
import axios from 'axios';
import { useAppSelector } from '../../store/store';

type companiesType = [
  {
    name: string;
    specialities: string[];
    city: string;
  }
];

type specility =
  | 'Excavation'
  | 'Plumbing'
  | 'Electrical'
  | 'Painting'
  | 'Dredging'
  | 'Carpentry'
  | 'Lineworking'
  | 'Ironworking'
  | 'Waterproofing'
  | 'Welding'
  | 'Landscaping';

const HomePage = () => {
  const companies = useAppSelector((state) => state.companies);
  const [rows, setRows] = useState<companiesType>([
    {
      name: '',
      specialities: [],
      city: '',
    },
  ]);
  const [error, setError] = useState('');
  const [specialities, setSpecialities] = useState<specility[]>([]);

  const handleSpecialities = (checked: boolean, speciality: specility) => {
    const updatedSpecialities = [...specialities];
    if (checked) {
      updatedSpecialities.push(speciality);
    } else {
      updatedSpecialities.splice(updatedSpecialities.indexOf(speciality), 1);
    }
    setSpecialities(updatedSpecialities);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/companies', {
        params: {
          search: companies.search,
          specialities: specialities.toString(),
        },
      })
      .then(({ data }) => {
        setRows(data);
      })
      .catch((err) => {
        setError(`Something went wrong ${err?.response?.data?.message || ''}`);
      });
  }, [companies.search, specialities]);
  return (
    <HomeTemplate>
      <Box mb={4}>
        <FormGroup sx={{ flexDirection: 'row' }}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Excavation')
                }
              />
            }
            label="Excavation"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Plumbing')
                }
              />
            }
            label="Plumbing"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Electrical')
                }
              />
            }
            label="Electrical"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Painting')
                }
              />
            }
            label="Painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Dredging')
                }
              />
            }
            label="Dredging"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Carpentry')
                }
              />
            }
            label="Carpentry"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Landscaping')
                }
              />
            }
            label="Landscaping"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Waterproofing')
                }
              />
            }
            label="Waterproofing"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Welding')
                }
              />
            }
            label="Welding"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Lineworking')
                }
              />
            }
            label="Lineworking"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handleSpecialities(e.target.checked, 'Ironworking')
                }
              />
            }
            label="Ironworking"
          />
        </FormGroup>
      </Box>
      <div>{error && <Alert severity="error">{error}</Alert>}</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="companies table">
          <TableHead>
            <TableRow>
              <TableCell>Company name</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Specialties</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={`${row.name + i}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <img src={`http://placekitten.com/50/${50 + i}`} alt="" />
                </TableCell>
                <TableCell>
                  {row.specialities.map((speciality) => `${speciality}, `)}
                </TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HomeTemplate>
  );
};

export default HomePage;
