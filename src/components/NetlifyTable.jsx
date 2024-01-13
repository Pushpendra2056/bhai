import DataTable from 'react-data-table-component';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';


export const NetlifyTable = () => {

    const [bloodGroup, setbloodGroup] = useState('');
    const [afterFilterData, setAfterFilterData] = useState('');

    useEffect(()=>{
        const filteredData = data.filter(person => person.blood_group === bloodGroup.label);
        setAfterFilterData(filteredData);
    }, [bloodGroup])

    useEffect(() => {
        setAfterFilterData(data);
    }, [])
    


    // function getFilteredData(value){
    //     let blood_group = value.label;
    
    //     setbloodGroup(blood_group);
    //     console.log(blood_group);
    // }
    return (
        <>
            <Autocomplete
                // value={bloodGroup}
                disablePortal
                id="combo-box-demo"
                options={blood_group}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Blood Group" />}
                // onChange={(e, newValue) => getFilteredData(newValue)}
                onChange={(event, newValue) => {
                    setbloodGroup(newValue);
                }}
                // inputValue={inputValue}
                // onInputChange={(event, newInputValue) => {
                //     console.log(newInputValue)
                //     setInputValue(newInputValue);
                // }}
            />

            <DataTable
                columns={columns}
                data={afterFilterData}
                //selectableRows
                //expandableRows
                //expandableRowsComponent={ExpandedComponent}
                pagination
                fixedHeader
                //striped
                responsive
                highlightOnHover
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 9, 10, 12, 30]}
            />
        </>
    )
}


const ExpandedComponent = () => <pre>hello</pre>;
const columns = [
    {
		name: 'Id',
		selector: row => row.id,
        sortable: true,
	},
    {
		name: 'Name',
		selector: row => row.name,
	},
	{
		name: 'Age',
		selector: row => row.age,
	},
	{
		name: 'City',
		selector: row => row.city,
	},
    {
		name: 'Blood Group',
		selector: row => row.blood_group,
	},
];
const data = [
    {"id": 1, "name": "Amit Kumar", "age": 25, "city": "Delhi", "blood_group": "A+"},
    {"id": 2, "name": "Sneha Singh", "age": 28, "city": "Mumbai", "blood_group": "B-"},
    {"id": 3, "name": "Rajesh Verma", "age": 22, "city": "Bangalore", "blood_group": "O+"},
    {"id": 4, "name": "Neha Sharma", "age": 30, "city": "Kolkata", "blood_group": "AB-"},
    {"id": 5, "name": "Sandeep Gupta", "age": 26, "city": "Chennai", "blood_group": "A-"},
    {"id": 6, "name": "Kavita Rajput", "age": 23, "city": "Hyderabad", "blood_group": "O-"},
    {"id": 7, "name": "Rajiv Mishra", "age": 27, "city": "Pune", "blood_group": "B+"},
    {"id": 8, "name": "Swati Sharma", "age": 29, "city": "Jaipur", "blood_group": "A+"},
    {"id": 9, "name": "Vikram Malhotra", "age": 33, "city": "Ahmedabad", "blood_group": "AB+"},
    {"id": 10, "name": "Pooja Khanna", "age": 26, "city": "Lucknow", "blood_group": "O-"},
    {"id": 11, "name": "Rohan Patel", "age": 31, "city": "Chandigarh", "blood_group": "B-"},
    {"id": 12, "name": "Nidhi Verma", "age": 24, "city": "Bhopal", "blood_group": "A+"},
    {"id": 13, "name": "Arjun Singh", "age": 28, "city": "Indore", "blood_group": "O+"},
    {"id": 14, "name": "Anita Sharma", "age": 26, "city": "Coimbatore", "blood_group": "AB-"},
    {"id": 15, "name": "Ajay Yadav", "age": 29, "city": "Nagpur", "blood_group": "A-"},
    {"id": 16, "name": "Ritu Kapoor", "age": 32, "city": "Surat", "blood_group": "B+"},
    {"id": 17, "name": "Rahul Verma", "age": 27, "city": "Visakhapatnam", "blood_group": "O-"},
    {"id": 18, "name": "Aisha Khan", "age": 25, "city": "Kochi", "blood_group": "AB+"},
    {"id": 19, "name": "Kunal Sharma", "age": 30, "city": "Jaipur", "blood_group": "A-"},
    {"id": 20, "name": "Preeti Patel", "age": 26, "city": "Vadodara", "blood_group": "B-"},
    {"id": 21, "name": "Aryan Verma", "age": 28, "city": "Ludhiana", "blood_group": "O+"},
    {"id": 22, "name": "Nisha Yadav", "age": 23, "city": "Bhubaneswar", "blood_group": "A+"},
    {"id": 23, "name": "Varun Singh", "age": 27, "city": "Amritsar", "blood_group": "AB-"},
    {"id": 24, "name": "Pallavi Mishra", "age": 29, "city": "Agra", "blood_group": "O-"},
    {"id": 25, "name": "Aditya Sharma", "age": 32, "city": "Patna", "blood_group": "B+"},
    {"id": 26, "name": "Sonia Gupta", "age": 25, "city": "Guwahati", "blood_group": "A-"},
    {"id": 27, "name": "Rajat Verma", "age": 28, "city": "Jodhpur", "blood_group": "AB+"},
    {"id": 28, "name": "Anjali Singh", "age": 26, "city": "Noida", "blood_group": "O+"},
    {"id": 29, "name": "Rahul Khanna", "age": 30, "city": "Gurgaon", "blood_group": "B-"},
    {"id": 30, "name": "Neha Verma", "age": 27, "city": "Raipur", "blood_group": "A+"},
    {"id": 31, "name": "Nisha", "age": 23, "city": "Bhubaneswar", "blood_group": "A+"}
]
const blood_group = [
    {label: "A+"},
    {label: "A-"},
    {label: "B-"},
    {label: "B+"},
    {label: "O+"},
    {label: "O-"},
    {label: "AB+"},
    {label: "AB-"},
]


  
  