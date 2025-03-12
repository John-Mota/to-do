export default {
  // Função para verificar os tipos das variáveis da linha selecionada
  checkRowDataTypes() {
    const rowData = data_table.selectedRow;

    console.log('rowIndex type:', typeof rowData.rowIndex); // Espera "number"
    console.log('id type:', typeof rowData.id); // Espera "string" ou "number"
    console.log('task type:', typeof rowData.task); // Espera "string"
    console.log('status type:', typeof rowData.status); // Espera "string"
    console.log('due_date type:', typeof rowData.date); // Espera "string" (formato YYYY-MM-DD após o moment)
    console.log('priority type:', typeof rowData.priority); // Espera "string" ou "number"
  }
}
