import Handlebars from 'handlebars';
import moment from 'moment';
import _remove from 'lodash.remove';

Handlebars.registerHelper('formatDate', function(date) {
  return moment(date).utc().format('DD.MM');
});

export default function (template, events) {
  const isToday = (event) => moment(moment(event.date).utc().format("YYYY-MM-DD")).isSame(moment().utc().format("YYYY-MM-DD"));
  const isFuture = (event) => moment(moment(event.date).utc().format("YYYY-MM-DD")).isAfter(moment().utc().format("YYYY-MM-DD"));

  events = _remove(events, (event) => isFuture(event) || isToday(event));

  const render = Handlebars.compile(template.innerHTML);
  const html = render(events);
  template.parentNode.insertAdjacentHTML('beforeend', html);
}