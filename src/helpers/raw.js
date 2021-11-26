/**
 * Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
 * @example
 * {{{{raw}}}}
 * {{ this }} code won't be parsed.
 * {{{{/raw}}}}
 */
module.exports = function(content) {
  return content.fn();
}

module.exports = function(element) {
  var inner = element.html();
  var attrs = getAttrs(element);

  switch (element[0].name) {
    // <calloutadv>
    case this.components.calloutadv:
      var classes = ['callout-inner'];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<table %s class="calloutadv"><tbody><tr><th class="%s">%s</th><th class="expander"></th></tr></tbody></table>', attrs, classes.join(' '), inner);
  }
}
