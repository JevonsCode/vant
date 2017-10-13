import Vue from 'vue';
import ImagePreview from './image-preview';

let instance;

const ImagePreviewConstructor = Vue.extend(ImagePreview);

const initInstance = () => {
  instance = new ImagePreviewConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImagePreviewBox = images => {
  if (!instance) {
    initInstance();
  }

  instance.images = images;
  instance.value = true;
};

export default ImagePreviewBox;
