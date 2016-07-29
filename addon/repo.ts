
import Ember from 'ember'
import { Blob, JSONBlob } from 'ember-git-data/utils/blob'

/**
 * TODO: generators "just work" in ember...if i recall
 * ember-concurrency did some things to optimize file size?
 * something about not including the polyfill.
 * TODO: github rate limit
 */
export default class Repo {
  constructor(
    private githubAjax,
    private owner: string,
    private repo: string,
    private branch: string
  ) {
  }
}

