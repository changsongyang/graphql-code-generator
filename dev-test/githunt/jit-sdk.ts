import { GraphQLSchema, ExecutionResult } from 'graphql';
import { compileQuery, isCompiledQuery } from 'graphql-jit';
import { AggregateError, isAsyncIterable, mapAsyncIterator } from '@graphql-tools/utils';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A comment about an entry, submitted by a user */
export type Comment = {
  __typename?: 'Comment';
  /** The text of the comment */
  content: Scalars['String'];
  /** A timestamp of when the comment was posted */
  createdAt: Scalars['Float'];
  /** The SQL ID of this entry */
  id: Scalars['Int'];
  /** The GitHub user who posted the comment */
  postedBy: User;
  /** The repository which this comment is about */
  repoName: Scalars['String'];
};

/** Information about a GitHub repository submitted to GitHunt */
export type Entry = {
  __typename?: 'Entry';
  /** The number of comments posted about this repository */
  commentCount: Scalars['Int'];
  /** Comments posted about this repository */
  comments: Array<Maybe<Comment>>;
  /** A timestamp of when the entry was submitted */
  createdAt: Scalars['Float'];
  /** The hot score of this repository */
  hotScore: Scalars['Float'];
  /** The SQL ID of this entry */
  id: Scalars['Int'];
  /** The GitHub user who submitted this entry */
  postedBy: User;
  /** Information about the repository from GitHub */
  repository: Repository;
  /** The score of this repository, upvotes - downvotes */
  score: Scalars['Int'];
  /** XXX to be changed */
  vote: Vote;
};

/** Information about a GitHub repository submitted to GitHunt */
export type EntryCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** A list of options for the sort order of the feed */
export enum FeedType {
  /** Sort by a combination of freshness and score, using Reddit's algorithm */
  Hot = 'HOT',
  /** Newest entries first */
  New = 'NEW',
  /** Highest score entries first */
  Top = 'TOP',
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Comment on a repository, returns the new comment */
  submitComment?: Maybe<Comment>;
  /** Submit a new repository, returns the new submission */
  submitRepository?: Maybe<Entry>;
  /** Vote on a repository submission, returns the submission that was voted on */
  vote?: Maybe<Entry>;
};

export type MutationSubmitCommentArgs = {
  commentContent: Scalars['String'];
  repoFullName: Scalars['String'];
};

export type MutationSubmitRepositoryArgs = {
  repoFullName: Scalars['String'];
};

export type MutationVoteArgs = {
  repoFullName: Scalars['String'];
  type: VoteType;
};

export type Query = {
  __typename?: 'Query';
  /** Return the currently logged in user, or null if nobody is logged in */
  currentUser?: Maybe<User>;
  /** A single entry */
  entry?: Maybe<Entry>;
  /** A feed of repository submissions */
  feed?: Maybe<Array<Maybe<Entry>>>;
};

export type QueryEntryArgs = {
  repoFullName: Scalars['String'];
};

export type QueryFeedArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  type: FeedType;
};

/**
 * A repository object from the GitHub API. This uses the exact field names returned by the
 * GitHub API for simplicity, even though the convention for GraphQL is usually to camel case.
 */
export type Repository = {
  __typename?: 'Repository';
  /** The description of the repository */
  description?: Maybe<Scalars['String']>;
  /** The full name of the repository with the username, e.g. apollostack/GitHunt-API */
  full_name: Scalars['String'];
  /** The link to the repository on GitHub */
  html_url: Scalars['String'];
  /** Just the name of the repository, e.g. GitHunt-API */
  name: Scalars['String'];
  /** The number of open issues on this repository on GitHub */
  open_issues_count?: Maybe<Scalars['Int']>;
  /** The owner of this repository on GitHub, e.g. apollostack */
  owner?: Maybe<User>;
  /** The number of people who have starred this repository on GitHub */
  stargazers_count: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscription fires on every comment added */
  commentAdded?: Maybe<Comment>;
};

export type SubscriptionCommentAddedArgs = {
  repoFullName: Scalars['String'];
};

/** A user object from the GitHub API. This uses the exact field names returned from the GitHub API. */
export type User = {
  __typename?: 'User';
  /** The URL to a directly embeddable image for this user's avatar */
  avatar_url: Scalars['String'];
  /** The URL of this user's GitHub page */
  html_url: Scalars['String'];
  /** The name of the user, e.g. apollostack */
  login: Scalars['String'];
};

/** XXX to be removed */
export type Vote = {
  __typename?: 'Vote';
  vote_value: Scalars['Int'];
};

/** The type of vote to record, when submitting a vote */
export enum VoteType {
  Cancel = 'CANCEL',
  Down = 'DOWN',
  Up = 'UP',
}

export type OnCommentAddedSubscriptionVariables = Exact<{
  repoFullName: Scalars['String'];
}>;

export type OnCommentAddedSubscription = {
  __typename?: 'Subscription';
  commentAdded?:
    | {
        __typename?: 'Comment';
        id: number;
        createdAt: number;
        content: string;
        postedBy: { __typename?: 'User'; login: string; html_url: string };
      }
    | null
    | undefined;
};

export type CommentQueryVariables = Exact<{
  repoFullName: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type CommentQuery = {
  __typename?: 'Query';
  currentUser?: { __typename?: 'User'; login: string; html_url: string } | null | undefined;
  entry?:
    | {
        __typename?: 'Entry';
        id: number;
        createdAt: number;
        commentCount: number;
        postedBy: { __typename?: 'User'; login: string; html_url: string };
        comments: Array<
          | {
              __typename?: 'Comment';
              id: number;
              createdAt: number;
              content: string;
              postedBy: { __typename?: 'User'; login: string; html_url: string };
            }
          | null
          | undefined
        >;
        repository: {
          __typename?: 'Repository';
          description?: string | null | undefined;
          open_issues_count?: number | null | undefined;
          stargazers_count: number;
          full_name: string;
          html_url: string;
        };
      }
    | null
    | undefined;
};

export type CommentsPageCommentFragment = {
  __typename?: 'Comment';
  id: number;
  createdAt: number;
  content: string;
  postedBy: { __typename?: 'User'; login: string; html_url: string };
};

export type CurrentUserForProfileQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserForProfileQuery = {
  __typename?: 'Query';
  currentUser?: { __typename?: 'User'; login: string; avatar_url: string } | null | undefined;
};

export type FeedEntryFragment = {
  __typename?: 'Entry';
  id: number;
  commentCount: number;
  score: number;
  createdAt: number;
  repository: {
    __typename?: 'Repository';
    full_name: string;
    html_url: string;
    description?: string | null | undefined;
    stargazers_count: number;
    open_issues_count?: number | null | undefined;
    owner?: { __typename?: 'User'; avatar_url: string } | null | undefined;
  };
  vote: { __typename?: 'Vote'; vote_value: number };
  postedBy: { __typename?: 'User'; html_url: string; login: string };
};

export type FeedQueryVariables = Exact<{
  type: FeedType;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type FeedQuery = {
  __typename?: 'Query';
  currentUser?: { __typename?: 'User'; login: string } | null | undefined;
  feed?:
    | Array<
        | {
            __typename?: 'Entry';
            id: number;
            commentCount: number;
            score: number;
            createdAt: number;
            repository: {
              __typename?: 'Repository';
              full_name: string;
              html_url: string;
              description?: string | null | undefined;
              stargazers_count: number;
              open_issues_count?: number | null | undefined;
              owner?: { __typename?: 'User'; avatar_url: string } | null | undefined;
            };
            vote: { __typename?: 'Vote'; vote_value: number };
            postedBy: { __typename?: 'User'; html_url: string; login: string };
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type SubmitRepositoryMutationVariables = Exact<{
  repoFullName: Scalars['String'];
}>;

export type SubmitRepositoryMutation = {
  __typename?: 'Mutation';
  submitRepository?: { __typename?: 'Entry'; createdAt: number } | null | undefined;
};

export type RepoInfoFragment = {
  __typename?: 'Entry';
  createdAt: number;
  repository: {
    __typename?: 'Repository';
    description?: string | null | undefined;
    stargazers_count: number;
    open_issues_count?: number | null | undefined;
  };
  postedBy: { __typename?: 'User'; html_url: string; login: string };
};

export type SubmitCommentMutationVariables = Exact<{
  repoFullName: Scalars['String'];
  commentContent: Scalars['String'];
}>;

export type SubmitCommentMutation = {
  __typename?: 'Mutation';
  submitComment?:
    | {
        __typename?: 'Comment';
        id: number;
        createdAt: number;
        content: string;
        postedBy: { __typename?: 'User'; login: string; html_url: string };
      }
    | null
    | undefined;
};

export type VoteButtonsFragment = {
  __typename?: 'Entry';
  score: number;
  vote: { __typename?: 'Vote'; vote_value: number };
};

export type VoteMutationVariables = Exact<{
  repoFullName: Scalars['String'];
  type: VoteType;
}>;

export type VoteMutation = {
  __typename?: 'Mutation';
  vote?:
    | { __typename?: 'Entry'; score: number; id: number; vote: { __typename?: 'Vote'; vote_value: number } }
    | null
    | undefined;
};

export const CommentsPageCommentFragmentDoc = gql`
  fragment CommentsPageComment on Comment {
    id
    postedBy {
      login
      html_url
    }
    createdAt
    content
  }
`;
export const VoteButtonsFragmentDoc = gql`
  fragment VoteButtons on Entry {
    score
    vote {
      vote_value
    }
  }
`;
export const RepoInfoFragmentDoc = gql`
  fragment RepoInfo on Entry {
    createdAt
    repository {
      description
      stargazers_count
      open_issues_count
    }
    postedBy {
      html_url
      login
    }
  }
`;
export const FeedEntryFragmentDoc = gql`
  fragment FeedEntry on Entry {
    id
    commentCount
    repository {
      full_name
      html_url
      owner {
        avatar_url
      }
    }
    ...VoteButtons
    ...RepoInfo
  }
  ${VoteButtonsFragmentDoc}
  ${RepoInfoFragmentDoc}
`;
export const OnCommentAddedDocument = gql`
  subscription onCommentAdded($repoFullName: String!) {
    commentAdded(repoFullName: $repoFullName) {
      id
      postedBy {
        login
        html_url
      }
      createdAt
      content
    }
  }
`;
export const CommentDocument = gql`
  query Comment($repoFullName: String!, $limit: Int, $offset: Int) {
    currentUser {
      login
      html_url
    }
    entry(repoFullName: $repoFullName) {
      id
      postedBy {
        login
        html_url
      }
      createdAt
      comments(limit: $limit, offset: $offset) {
        ...CommentsPageComment
      }
      commentCount
      repository {
        full_name
        html_url
        ... on Repository {
          description
          open_issues_count
          stargazers_count
        }
      }
    }
  }
  ${CommentsPageCommentFragmentDoc}
`;
export const CurrentUserForProfileDocument = gql`
  query CurrentUserForProfile {
    currentUser {
      login
      avatar_url
    }
  }
`;
export const FeedDocument = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    currentUser {
      login
    }
    feed(type: $type, offset: $offset, limit: $limit) {
      ...FeedEntry
    }
  }
  ${FeedEntryFragmentDoc}
`;
export const SubmitRepositoryDocument = gql`
  mutation submitRepository($repoFullName: String!) {
    submitRepository(repoFullName: $repoFullName) {
      createdAt
    }
  }
`;
export const SubmitCommentDocument = gql`
  mutation submitComment($repoFullName: String!, $commentContent: String!) {
    submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {
      ...CommentsPageComment
    }
  }
  ${CommentsPageCommentFragmentDoc}
`;
export const VoteDocument = gql`
  mutation vote($repoFullName: String!, $type: VoteType!) {
    vote(repoFullName: $repoFullName, type: $type) {
      score
      id
      vote {
        vote_value
      }
    }
  }
`;
async function handleSubscriptionResult<T>(
  resultIterator: AsyncIterableIterator<ExecutionResult> | ExecutionResult,
  operationName: string
) {
  if (isAsyncIterable(resultIterator)) {
    return mapAsyncIterator<any, T>(resultIterator, result => handleExecutionResult(result, operationName));
  } else {
    return handleExecutionResult<T>(resultIterator, operationName);
  }
}
function handleExecutionResult<T>(result: ExecutionResult, operationName: string) {
  if (result.errors) {
    throw new AggregateError(result.errors, `Failed to execute ${operationName}: ${result.errors.join('\n')}`);
  }
  return result.data as T;
}
export function getSdk<C = any, R = any>(schema: GraphQLSchema, globalContext?: C, globalRoot?: R) {
  const onCommentAddedCompiled = compileQuery(schema, OnCommentAddedDocument, 'onCommentAdded');
  if (!isCompiledQuery(onCommentAddedCompiled)) {
    throw new AggregateError(
      onCommentAddedCompiled?.errors || [],
      'Failed to compile onCommentAdded: ' + onCommentAddedCompiled?.errors?.join('\n')
    );
  }

  const CommentCompiled = compileQuery(schema, CommentDocument, 'Comment');
  if (!isCompiledQuery(CommentCompiled)) {
    throw new AggregateError(
      CommentCompiled?.errors || [],
      'Failed to compile Comment: ' + CommentCompiled?.errors?.join('\n')
    );
  }

  const CurrentUserForProfileCompiled = compileQuery(schema, CurrentUserForProfileDocument, 'CurrentUserForProfile');
  if (!isCompiledQuery(CurrentUserForProfileCompiled)) {
    throw new AggregateError(
      CurrentUserForProfileCompiled?.errors || [],
      'Failed to compile CurrentUserForProfile: ' + CurrentUserForProfileCompiled?.errors?.join('\n')
    );
  }

  const FeedCompiled = compileQuery(schema, FeedDocument, 'Feed');
  if (!isCompiledQuery(FeedCompiled)) {
    throw new AggregateError(FeedCompiled?.errors || [], 'Failed to compile Feed: ' + FeedCompiled?.errors?.join('\n'));
  }

  const submitRepositoryCompiled = compileQuery(schema, SubmitRepositoryDocument, 'submitRepository');
  if (!isCompiledQuery(submitRepositoryCompiled)) {
    throw new AggregateError(
      submitRepositoryCompiled?.errors || [],
      'Failed to compile submitRepository: ' + submitRepositoryCompiled?.errors?.join('\n')
    );
  }

  const submitCommentCompiled = compileQuery(schema, SubmitCommentDocument, 'submitComment');
  if (!isCompiledQuery(submitCommentCompiled)) {
    throw new AggregateError(
      submitCommentCompiled?.errors || [],
      'Failed to compile submitComment: ' + submitCommentCompiled?.errors?.join('\n')
    );
  }

  const voteCompiled = compileQuery(schema, VoteDocument, 'vote');
  if (!isCompiledQuery(voteCompiled)) {
    throw new AggregateError(voteCompiled?.errors || [], 'Failed to compile vote: ' + voteCompiled?.errors?.join('\n'));
  }

  return {
    async onCommentAdded(
      variables: OnCommentAddedSubscriptionVariables,
      context = globalContext,
      root = globalRoot
    ): Promise<AsyncIterableIterator<OnCommentAddedSubscription> | OnCommentAddedSubscription> {
      const result = await onCommentAddedCompiled.subscribe!(root, context, variables);
      return handleSubscriptionResult(result, 'onCommentAdded');
    },
    async Comment(variables: CommentQueryVariables, context = globalContext, root = globalRoot): Promise<CommentQuery> {
      const result = await CommentCompiled.query(root, context, variables);
      return handleExecutionResult(result, 'Comment');
    },
    async CurrentUserForProfile(
      variables?: CurrentUserForProfileQueryVariables,
      context = globalContext,
      root = globalRoot
    ): Promise<CurrentUserForProfileQuery> {
      const result = await CurrentUserForProfileCompiled.query(root, context, variables);
      return handleExecutionResult(result, 'CurrentUserForProfile');
    },
    async Feed(variables: FeedQueryVariables, context = globalContext, root = globalRoot): Promise<FeedQuery> {
      const result = await FeedCompiled.query(root, context, variables);
      return handleExecutionResult(result, 'Feed');
    },
    async submitRepository(
      variables: SubmitRepositoryMutationVariables,
      context = globalContext,
      root = globalRoot
    ): Promise<SubmitRepositoryMutation> {
      const result = await submitRepositoryCompiled.query(root, context, variables);
      return handleExecutionResult(result, 'submitRepository');
    },
    async submitComment(
      variables: SubmitCommentMutationVariables,
      context = globalContext,
      root = globalRoot
    ): Promise<SubmitCommentMutation> {
      const result = await submitCommentCompiled.query(root, context, variables);
      return handleExecutionResult(result, 'submitComment');
    },
    async vote(variables: VoteMutationVariables, context = globalContext, root = globalRoot): Promise<VoteMutation> {
      const result = await voteCompiled.query(root, context, variables);
      return handleExecutionResult(result, 'vote');
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
