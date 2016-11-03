// This file was automatically generated using grunt-webfont
import { createIconSet } from 'react-native-vector-icons';

const glyphMap = {
  <% for (var i = 0; i < glyphs.length; i++) { %>
	'<%= glyphs[i] %>': '\u<%= codepoints[i] %>',
  <% } %>
};

export const Icon = createIconSet(glyphMap, 'icons', 'icons.ttf');

