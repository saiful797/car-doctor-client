
import ResponsiveTable from './ResponsiveTable';

const Table = () => {
    const tableData = [
        { id: 1, name: 'Alice', age: 25, phone: '01521403128' },
        { id: 2, name: 'Bob', age: 30, phone: '01521403128' },
        { id: 3, name: 'Charlie', age: 28, phone: '01521403128' },
        // Add more data items as needed
      ];
    
      return (
        <div>
          <h1>Responsive Table Example</h1>
          <ResponsiveTable data={tableData} />
        </div>
      );
};

export default Table;