import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Yggdrasil",
  description: "Administration panel for site data management",
};

// Types pour les données
interface SiteData {
  users: number;
  pages: number;
  posts: number;
  comments: number;
  lastUpdated: string;
}

// Fonction pour récupérer les données (simulée pour l'instant)
async function fetchSiteData(): Promise<SiteData> {
  // TODO: Remplacer par des appels API réels
  return {
    users: 0,
    pages: 0,
    posts: 0,
    comments: 0,
    lastUpdated: new Date().toISOString(),
  };
}

// Composant de chargement
function DataSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
}

// Composant pour afficher les statistiques
function DataCard({ title, value, icon }: { title: string; value: number; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>
    </div>
  );
}

// Composant principal des données
async function AdminData() {
  const data = await fetchSiteData();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DataCard title="Utilisateurs" value={data.users} icon="👥" />
        <DataCard title="Pages" value={data.pages} icon="📄" />
        <DataCard title="Articles" value={data.posts} icon="📝" />
        <DataCard title="Commentaires" value={data.comments} icon="💬" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Données brutes
        </h2>
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        Dernière mise à jour: {new Date(data.lastUpdated).toLocaleString('fr-FR')}
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Tableau de bord Admin
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Visualisation et gestion des données du site
          </p>
        </div>

        {/* Barre de navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-4 p-4">
            <button className="px-4 py-2 bg-foreground text-background rounded-md font-medium transition-colors hover:bg-gray-700 dark:hover:bg-gray-200">
              Vue D ensemble
            </button>
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 rounded-md font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
              Utilisateurs
            </button>
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 rounded-md font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
              Contenu
            </button>
          </nav>
        </div>

        {/* Contenu principal */}
        <Suspense fallback={<DataSkeleton />}>
          <AdminData />
        </Suspense>
      </div>
    </div>
  );
}