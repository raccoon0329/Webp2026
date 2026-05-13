import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {
  const [list, setList] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // 抓取景點觀光展覽資訊 (使用政府或文化部公開資料 API)
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then((res) => res.json())
      .then((data) => {
        // 轉換資料格式以符合 DataGrid 的 id 要求
        const rows = data.map((item, index) => ({
          id: index,
          title: item.title,
          location: item.showInfo[0]?.locationName || '無資訊',
          price: item.showInfo[0]?.price || '免費'
        }));
        setList(rows);
      });
  }, []);

  const columns = [
    { field: 'title', headerName: '名稱', width: 400 },
    { field: 'location', headerName: '地點', width: 300 },
    { field: 'price', headerName: '票價', width: 200 },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" style={{ fontWeight: 'bold', color: '#2e7d32' }}>
          景點觀光展覽資訊 (DataGrid 版)
        </Typography>

        <div style={{ height: 700, width: '100%', marginTop: '20px' }}>
          <DataGrid
            rows={list}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 50]}
            pagination
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Box>
    </Container>
  );
}

export default App;
