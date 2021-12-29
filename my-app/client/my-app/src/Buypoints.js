import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import buypoints from './images/buypoints.jpg'
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: ' #5c0931',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(Membershiptier, Purchaselimit
  , Tierupgrade) {
  return { Membershiptier, Purchaselimit, Tierupgrade };
}

const rows = [
  createData('Platinum', 150, 'Not applicable', 24, 4.0),
  createData('Gold ', 80, 150),
  createData('Silver', 40, 80),
  createData('Burgundy', 'Not applicable', 40),
];

export default function Buypoints() {
  const navigate = useNavigate();
  return (
    <div style={{ width: window.screen.width }}>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{
          marginTop: -250,

          background: `url(${buypoints})`, backgroundSize: "contain", backgroundRepeat: "repeat", height: 450, width: window.screen.width
        }}
      >
        <div>
          <Typography style={{ fontSize: 30, fontFamily: 'Verdana', marginTop: 150, color: '#5c0931', marginLeft: 70, fontWeight: 'bold' }}

            align="left"
            gutterBottom
          >



            Buy points to upgrade
            or retain tier   </Typography>
          <Typography style={{ fontSize: 20, fontFamily: 'Verdana', fontWeight: "bold", marginTop: 230, marginLeft: 170, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <Link style={{ color: '#5c0931' }} href="#" onClick={() => navigate("/Search")}>Home</Link> > Buy points

          </Typography>
          <hr style={{ fontSize: 20, fontWeight: "bold", marginLeft: 50, color: ' #5c0931' }} />

          <Typography style={{ fontSize: 18, fontFamily: 'Verdana', marginTop: 10, marginLeft: 200, color: ' #5c0931', fontWeight: 'bold' }}

            align="left"
            gutterBottom
          >
            Points are awarded to help you upgrade or renew your Privilege Club membership tier.
          </Typography><br />
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />Only Privilege Club main members are eligible to buy points        </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />Purchase of points is available online only.     </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />Cost per point is US$25.      </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />Platinum, Gold and Silver members can buy points to retain their tier.      </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />Gold, Silver and Burgundy members can buy points to upgrade to the next tier.   </Typography>

          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />Members can purchase points once in 36 months.  </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />points purchased are non-refundable and non-transferable.   </Typography>

          <br />
          <Typography style={{ fontSize: 18, fontFamily: 'Verdana', marginTop: 10, marginLeft: 200, color: ' #5c0931', fontWeight: 'bold' }}

            align="left"
            gutterBottom
          >



            Purchase limit for points  </Typography>

          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            Platinum, Gold and Silver members can buy Qpoints to retain their tier. Gold, Silver and Burgundy members can buy Qpoints to upgrade to the next tier.

          </Typography>
          <br />
          <TableContainer component={Paper} style={{ width: 900, marginLeft: 300 }}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>

                  <StyledTableCell style={{ fontSize: 17, backgroundcolor: ' #5c0931', color: ' white', width: 100 }} align="center">Membership tier</StyledTableCell>
                  <StyledTableCell style={{ fontSize: 17, color: ' white', width: 100 }} align="center">Purchase limit for Qpoints
                    Tier retention</StyledTableCell>
                  <StyledTableCell style={{ fontSize: 17, color: ' white', width: 100 }} align="center">Tier upgrade</StyledTableCell>
                  {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.Membershiptier}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.Purchaselimit}</StyledTableCell>
                    <StyledTableCell align="center">{row.Tierupgrade}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />points purchased shall count towards the minimum activity required within a membership year to qualify for tier retention or upgrade, i.e. you
          </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            will need to have earned at least 20% of your Qpoints or have flown 4 sectors (within 12 months prior to retention) on flights either marketed or
          </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            operated by BSB Airways
          </Typography><br />
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />You can only make a one-time purchase of Qpoints in 36 months. For example,  as a Burgundy member, the points purchase limit for an
          </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            upgrade to Silver tier is 40 points. If you buy 5 points, you will not be able to return to buy the balance of 35 points. You would only be able
          </Typography>
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            to buy points again after 36 months. Therefore, you need to be sure of the number of points required before initiating a purchase transaction.
          </Typography><br />
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight /> Marketed refers to the airline whose flight number is specified on your booking. ** Operated refers to the airline you are flying on.
          </Typography><br />
          <Typography style={{ fontSize: 16, fontFamily: 'Verdana', marginTop: 0, marginLeft: 200, color: ' #5c0931' }}

            align="left"
            gutterBottom
          >
            <AiOutlineArrowRight />All standard Privilege Club programme terms and conditions apply.        </Typography>





          <br />
          <br />




        </div>

      </div>
    </div>
  )
}