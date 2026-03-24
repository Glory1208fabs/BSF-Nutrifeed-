const ActivityTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Farm Activity
      </h2>

      <table className="w-full text-left">

        <thead>
          <tr className="border-b">
            <th className="py-2">Farm</th>
            <th className="py-2">Production</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td>Farm A</td>
            <td>50kg</td>
            <td className="text-green-600">Good</td>
          </tr>

          <tr className="border-b">
            <td>Farm B</td>
            <td>30kg</td>
            <td className="text-yellow-600">Low</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default ActivityTable;