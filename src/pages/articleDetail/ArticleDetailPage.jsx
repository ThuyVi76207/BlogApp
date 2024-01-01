import React from 'react';
import MainLayout from '../../components/MainLayout';
import BreadCrumbs from '../../components/BreadCrumbs';

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
        <article className="flex-1">
          <BreadCrumbs />
        </article>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
