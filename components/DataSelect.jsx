const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'Febuary' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }

]

const DataSelect = ({ yearValue, monthValue, years, onChangeMonth, onChangeYear }) => {
    return (
        <>
            <select className="month" value={monthValue} onChange={onChangeMonth}>
                <option value='' disabled>Month</option>
                {
                    months.map((month) => (
                        <option key={month.value} value={month.value}>{month.label}</option>
                    ))
                }
            </select>
            <select className='year' value={yearValue} onChange={onChangeYear}>
                <option value='' disabled>Year</option>
                {
                    years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))
                }

            </select>
        </>
    )
}

export default DataSelect 