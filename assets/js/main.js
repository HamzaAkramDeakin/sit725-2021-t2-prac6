/**
 * Prompt delete
 */
function promptDelete() {
  return Swal.fire({
    icon: 'warning',
    title: 'Delete',
    text: 'Do you want to delete this?',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    confirmButtonText: 'Delete',
  });
}
