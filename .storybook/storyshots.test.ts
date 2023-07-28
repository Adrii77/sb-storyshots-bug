import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';
import * as path from 'path';

class CustomStories2SnapsConverter extends Stories2SnapsConverter {
  override getSnapshotFileName({ fileName }: any) {
    const { name } = path.parse(fileName);
    const { snapshotExtension } = this.options;

    return path.format({
      dir: path.join(__dirname, '__snapshots__'),
      name,
      ext: snapshotExtension,
    });
  }
}

initStoryshots({
  framework: 'angular',
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new CustomStories2SnapsConverter(),
});
