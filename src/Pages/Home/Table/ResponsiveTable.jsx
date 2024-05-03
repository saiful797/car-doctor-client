import PropTypes from 'prop-types'
import './Table.css'

const ResponsiveTable = ({data}) => {
    return (
        <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th className='border'>ID</th>
              <th className='border'>Name</th>
              <th className='border'>Age</th>
              <th className='border'>Phone</th>
              <th className='border'>Action</th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='border'>{item.id}</td>
                <td className='border'>{item.name}</td>
                <td className='border'>{item.age}</td>
                <td className='border'>{item.phone}</td>
                <td className='flex gap-1 border'>
                    <button>E</button>
                    <button>D</button>
                </td>
                {/* Render more columns as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

ResponsiveTable.propTypes={
    data: PropTypes.array
}
export default ResponsiveTable;