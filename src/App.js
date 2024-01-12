import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
const baseURL = "https://reqres.in/api/users?page=2";
function App() {
    const [post, setPost] = useState([]);
    // const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    // const paginatorRight = <Button type="button" icon="pi pi-download" text />;
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data.data);
      });
    }, []);

    
    return (
        <div className="card">
            <DataTable value={post} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" >
                <Column field="id" header="@"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="first_name" header="First Name"></Column>
                <Column field="last_name" header="Last Name"></Column>
            </DataTable>
        </div>
    );
}

export default App;
