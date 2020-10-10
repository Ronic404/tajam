import $ from 'jquery';

export default $('#modal').on('hidden.bs.modal', () => {
  const LINK = $('#video').attr('src');
  $('#video').attr('src', LINK);
});
