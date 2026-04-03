export const getWeatherIcon = (conditionText = '') => {
  const text = conditionText.toLowerCase();

  if (text.includes('tormenta') || text.includes('trueno')) {
    return { icon: 'ph:cloud-lightning-fill', color: '#a85f3a' };
  }

  if (text.includes('nieve') || text.includes('aguanieve') || text.includes('hielo')) {
    return { icon: 'ph:snowflake-bold', color: '#8e6f84' };
  }

  if (text.includes('lluvia') || text.includes('chubasco') || text.includes('llovizna')) {
    return { icon: 'ph:cloud-rain-fill', color: '#4e4e57' };
  }

  if (text.includes('niebla') || text.includes('neblina') || text.includes('bruma')) {
    return { icon: 'ph:cloud-fog-fill', color: '#5a5a63' };
  }

  if (text.includes('nublado') || text.includes('nuboso')) {
    return { icon: 'ph:cloud-fill', color: '#2f2f35' };
  }

  if (text.includes('despejado') || text.includes('soleado')) {
    return { icon: 'ph:sun-fill', color: '#e6d45a' };
  }

  if (text.includes('parcial')) {
    return { icon: 'ph:cloud-sun-fill', color: '#56535f' };
  }

  return { icon: 'ph:cloud-sun-fill', color: '#4b4b54' };
};
